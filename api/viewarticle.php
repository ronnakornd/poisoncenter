<?php
include("./function/connect.php");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
  $id = $_GET["id"];
  $queryString = "SELECT * FROM poison_article WHERE id = '".$id."' ";
  $query = mysqli_query($conn,$queryString);
  $res = mysqli_fetch_array($query);
  $authorid = $res["author"];
  $authorQueryString = "SELECT * FROM poison_user WHERE id = '".$authorid."' ";
  $authorQuery = mysqli_query($conn,$authorQueryString );
  $author = mysqli_fetch_array($authorQuery);
  $authorName = $author['title']." ".$author['firstname']." ".$author['lastname'];
  @$getArticle->header = $res["header"];
  $getArticle->cover = $res["cover"];
  $getArticle->pin = $res["pin"];
  $getArticle->content = $res["content"];
  $getArticle->autherid = $res["author"];
  $getArticle->section = $res["section"];
  $getArticle->caption = $res["caption"];
  $getArticle->author = $authorName;
  $getArticle->date = DateThai($res["time"]);
  $jsonArticle = json_encode($getArticle);
  echo $jsonArticle;

  function DateThai($strDate)
  {
      $strYear = date("Y",strtotime($strDate))+543;
      $strMonth= date("n",strtotime($strDate));
      $strDay= date("j",strtotime($strDate));
      $strHour= date("H",strtotime($strDate));
      $strMinute= date("i",strtotime($strDate));
      $strSeconds= date("s",strtotime($strDate));
      $strMonthCut = Array("","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.");
      $strMonthThai=$strMonthCut[$strMonth];
      return "$strDay $strMonthThai $strYear, $strHour:$strMinute";
  }


?>