import json
import airflow
from airflow import DAG
from airflow.providers.http.operators.http import HttpOperator
from airflow.operators.python import PythonOperator
from airflow.models import Variable

dag = DAG(
    dag_id="get_butterfly_data",
    start_date=airflow.utils.dates.days_ago(1),
    schedule_interval=None, # DAG triggeröidään Airflown UI:sta
)

# https://github.com/apache/airflow/blob/main/airflow/providers/http/operators/http.py
get_butterflies_from_lajifi = HttpOperator(
    task_id="get_butterflies_from_lajifi",
    method="GET",
    http_conn_id="api_laji_fi", # Luotu Airflown Admin-paneelissa uusi HTTP-yhteys
    endpoint="warehouse/query/unit/list",
    data={
        "finnishMunicipalityId": "ML.660,ML.648,ML.365",
        "informalTaxonGroupId": "MVL.31",
        "time": "-3,0",
        "access_token": Variable.get("laji_fi_access_token") # Luotu Airflown Admin-paneelissa uusi muuttuja
    },
    headers={'Content-Type': 'application/json'},
    dag=dag,
)

def process_butterflies(ti):
    response = ti.xcom_pull(task_ids='get_butterflies_from_lajifi')
    data = json.loads(response)
    print(data)

process_butterflies = PythonOperator(
    task_id='process_butterflies',
    python_callable=process_butterflies,
    provide_context=True,
    dag=dag,
)

# Tehtävien ajojärjestys
get_butterflies_from_lajifi >> process_butterflies