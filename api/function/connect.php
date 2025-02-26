<?php
$host = "localhost";
$user = "sql_emkkuacth"; 
$passwd = "HEAjfLEt26JpC84N"; 
$dbname = "sql_emkkuacth";
$conn = mysqli_connect($host,$user,$passwd,$dbname);
mysqli_set_charset( $conn, 'utf8');
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

?>