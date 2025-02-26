<?php
include "./function/connect.php";
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$queryString = "SELECT * FROM poison_case WHERE id = '" . $_GET['id'] . "' ";
$query = mysqli_query($conn, $queryString);
$resArray = array();
while ($res = mysqli_fetch_array($query, MYSQLI_ASSOC)) {
    array_push($resArray, $res);
}
mysqli_close($conn);
echo json_encode($resArray);
?>
