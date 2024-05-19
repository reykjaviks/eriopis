import json
import pathlib
import airflow
import requests
import requests.exceptions as requests_exceptions
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.python import PythonOperator

dag = DAG(
    dag_id="ellan_eka_dag",
    start_date=airflow.utils.dates.days_ago(1),
    schedule_interval=None, # DAG triggeröidään Airflown UI:sta
)

lataa_luontoreitit = BashOperator(
    task_id="lataa_luontoreitit",
    bash_command="curl -o /temp/luontoreitit.json -L 'https://citynature.eu/api/wp/v2/places?cityid=5'",
    dag=dag,
)

tulosta_sisalto = BashOperator(
    task_id="notify",
    bash_command='echo "Temp-kansion sisältö: $(ls /tmp/)"',
    dag=dag,
)

# Binary right shift:llä määritellään taskien ajojärjestys
lataa_luontoreitit >> tulosta_sisalto