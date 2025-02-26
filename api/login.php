<?php 
include("./function/connect.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
  $username = $_POST["username"];
  $password = $_POST["password"];
  $queryString = "SELECT * FROM poison_user WHERE username = '".$username."' AND password = '".$password."'";
  $query = mysqli_query($conn,$queryString);
  if($query){
if(mysqli_num_rows($query)>0){
    $res = mysqli_fetch_array($query);
    @$getUser->id = $res["id"];
    $getUser->username = $res['username'];
    $getUser->title = $res['title'];
    $getUser->firstname = $res['firstname'];
    $getUser->lastname = $res['lastname'];
    $getUser->fullname = $res['title']." ".$res['firstname']." ".$res['lastname'];
    $getUser->position = $res['position'];
    $jsonUser = json_encode($getUser);
    echo $jsonUser;
   }else{
    @$getUser->error = "username/password incorrect";
    $jsonUser = json_encode($getUser);
    echo $jsonUser;
   }
  }
?>
