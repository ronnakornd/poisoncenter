<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
require_once 'db.class.php';
DB::$host = "localhost";
DB::$user = "sql_em";
DB::$password = "6ZZ5EPbyWRrSYmPS";
DB::$dbName = "sql_em";


function getPoisonCaseList()
{   $fields = array(
    "call_date",
    "call_time",
    "information_scientist",
    "caller_name",
    "caller_phone",
    "caller_type",
    "caller_location",
    "organization_name",
    "organization_type",
    "enquiry_reason",
    "communication_method",
    "exposure_circumstance",
    "exposure_location",
    "patient_number",
    "referral",
    "agent_caller_name",
    "agent_name",
    "agent_category",
    "amount",
    "exposure_type",
    "exposure_duration",
    "exposure_time",
    "exposure_route",
    "patient_name",
    "patient_birth_date",
    "patient_weight",
    "patient_address",
    "patient_phone",
    "patient_gender",
    "patient_age",
    "patient_age_category",
    "patient_occupation",
    "patient_pregnancy",
    "patient_gestational_age_week",
    "patient_gestational_age_plus_day",
    "patient_gestational_trimester",
    "patient_lactation",
    "patient_clinical_feature",
    "patient_relevant_history",
    "risk_assessment",
    "investigation",
    "treatment",
    "disposition_advice",
    "severity_initial",
    "severity_final",
    "outcome",
    "animal",
    "active",
    "create_date",
    "last_date",
    "multiple_victim",
    "group_id",
);
    $results = DB::query('SELECT * FROM poison_case');
    $resArray = []; 
    foreach ($results as $row) {
        @$res->id = $row["id"];
        foreach ($fields as $field) {
            $res->$field = $row[$field];
        }
        array_push($resArray,$res); 
    }
    $jsonRes = json_encode($resArray);
    echo $jsonRes;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    getPoisonCaseList();
}

?>
