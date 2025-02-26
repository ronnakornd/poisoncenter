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

function createPoisonCase()
{
    DB::insert('poison_case', ['id' => null ,'create_date' => new DateTime()]);
    $insert_id = DB::insertId();
    echo $insert_id;
}

function getPoisonCase($id)
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
    $results = DB::query('SELECT * FROM poison_case WHERE id = %i_id', [
        'id' => $id,
    ]);
    foreach ($results as $row) {
        @$res->id = $row["id"];
        foreach ($fields as $field) {
            $res->$field = $row[$field];
        }
        $jsonRes = json_encode($res,JSON_NUMERIC_CHECK);
        echo $jsonRes;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    createPoisonCase();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    getPoisonCase($_GET['id']);
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents('php://input'), $_PUT);
    $fields = array(
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
    foreach ($_PUT as $key => $value) {
        if (in_array($key, $fields) && !strstr($key, 'id') && !empty($value) && !strstr($value, '')) {
            DB::update('poison_case',[$key -> $value],['id' -> $_PUT['id']]);
                          
        }
    }
}
