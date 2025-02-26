<?php 
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods:  POST');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
function upimg($img,$imglocate){
    if($img['name']!=''){
    $fileupload1=$img['tmp_name'];
    $g_img=explode(".",$img['name']);
    $file_up=time().".".$g_img[1]; 
        if($fileupload1){
            $array_last=explode(".",$file_up);
            $c=count($array_last)-1;
            $lastname=strtolower($array_last[$c]);                    
    if (move_uploaded_file($fileupload1, $imglocate.$file_up)) {
        return $file_up;
    }     
        }               
    }
}
if($_FILES['file']['name']!=""){
    $my_filename=upimg($_FILES['file'],"../upload/");
    @$res->src = $my_filename;
    $jsonRes = json_encode($res);
    echo $jsonRes;
}else{
    @$res->error = "upload failed";
    $jsonRes = json_encode($res);
    echo $jsonRes;
}
?>
