<?php
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Credentials: true");
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
  include("./function/connect.php");
  $id = isset($_POST["id"]) ? $_POST["id"] : "";
	$header = isset($_POST["header"]) ? $_POST["header"] : "";
	$caption = isset($_POST["caption"]) ? $_POST["caption"] : "";
	$cover = isset($_POST["cover"]) ? $_POST["cover"] : "";
	$content = isset($_POST["content"]) ? $_POST["content"] : "";
	$author = isset($_POST["author"]) ? $_POST["author"] : "";
  $section = isset($_POST["section"]) ? $_POST["section"] : "";
  $pin = isset($_POST["pin"]) ? $_POST["pin"] : "0";
	if(!isset($_POST['id'])){
		$q2 = "INSERT INTO poison_article (`id`,`header`, `caption`, `cover`, `content`, `author`, `section`, `time` ,`pin`) VALUES (NULL,'".$header."', '".$caption."', '".$cover."', '".$content."', '".$author."', '".$section."', NOW() , ".$pin.")";
    if(	$qr2 = mysqli_query($conn,$q2)){
      $q4 = "SELECT * FROM `poison_article`  ORDER BY id DESC LIMIT 1";
      $qr4 = mysqli_query($conn,$q4) ;
      while($rs4 = mysqli_fetch_array($qr4)){
        @$getArticle->header = $rs4["header"];
        $getArticle->content = $rs4["content"];
        $getArticle->caption = $rs4["caption"];
        $getArticle->cover = $rs4["cover"];
        $getArticle->pin = $rs4["pin"];
        $getArticle->section = $rs4["section"];
        $getArticle->id = $rs4["id"];
        $jsonArticle = json_encode($getArticle);
        echo $jsonArticle;
      }
    }
	}else{
		$q3 = "UPDATE  poison_article SET  `header` =  '".$header."',`caption` =  '".$caption."',`cover` =  '".$cover."',  `content` = '".$content."',`author` =  '".$author."',
`section` =  '".$section."',`time` = NOW( ) , `pin` = ".$pin." WHERE `id` = '".$id."' ";
		$qr3 = mysqli_query($conn,$q3);
		$q4 = "SELECT * FROM poison_article WHERE `id` = '".$id."' ";
		$qr4 = mysqli_query($conn,$q4) ;
		while($rs4 = mysqli_fetch_array($qr4)){
      @$getArticle->header = $rs4["header"];
      $getArticle->content = $rs4["content"];
      $getArticle->caption = $rs4["caption"];
      $getArticle->cover = $rs4["cover"];
      $getArticle->pin = $rs4["pin"];
      $getArticle->section = $rs4["section"];
      $getArticle->id = $rs4["id"];
      $jsonArticle = json_encode($getArticle);
      echo $jsonArticle;
		}//END
    }
?>