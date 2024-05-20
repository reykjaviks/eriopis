import json
import airflow
from airflow import DAG
from airflow.providers.http.operators.http import HttpOperator
from airflow.operators.python import PythonOperator
from airflow.utils.dates import days_ago

def process_butterflies(ti):
    response = ti.xcom_pull(task_ids='get_butterflies')
    data = json.loads(response)
    print(data)

dag = DAG(
    dag_id="fetch_butterflies",
    start_date=airflow.utils.dates.days_ago(1),
    schedule_interval=None, # DAG triggeröidään Airflown UI:sta
)

get_butterflies = HttpOperator(
    task_id="get_butterflies",
    method="GET",
    http_conn_id=None,  # Poistetaan http_conn_id:n käyttö
    endpoint="https://api.laji.fi/v0/warehouse/query/unit/list",
    params={
        "informalTaxonGroupId": "MVL.31", 
        "finnishMunicipalityId": "ML.660,ML.648,ML.365", 
        "time": "-7/0"
    },
    headers={'Content-Type': 'application/json'},
    dag=dag,
)

process_butterflies_task = PythonOperator(
    task_id='process_butterflies',
    python_callable=process_butterflies,
    provide_context=True,
    dag=dag,
)

# Tehtävien ajojärjestys
get_butterflies >> process_butterflies_task