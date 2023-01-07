<?php
if (isset($_POST['name'])) {
    $yes=0;
$list=array();
    $str="{'name':'".
        $_POST["name"].
        "','password':'".
        $_POST["password"].
        "','email':'".$_POST["email"]."'}";
        $old_content = file_get_contents("testfile.txt");
        $yes=strpos($old_content,$_POST["email"])!==false;
        $myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
        $emails="";
        $split=explode("\n",$str."\n".$old_content);
        for ($x = 0; $x <= count($split); $x++) {
            $uemail=explode("'}",explode("','email':'",$split[$x])[1])[0];
            if(strpos($_POST["email"],$uemail)!==false){
                $newact=$split[$x];
            }
            if(strpos($emails,$uemail)!==false){

            }else{
            $emails.=$uemail;
            array_push($list,$split[$x]);
            }
          }
        fwrite($myfile, join("\n",$list));
        fclose($myfile);
        echo "List created:$yes<script>alert('1')</script>";
        if($yes==1){
            header("Location:login.html");
            die();
        }
        else{
            header("Location:signup.html?inval=1&msg=Acount created&act=$str");
            die();
        }
}
if(isset($_GET["name"])){
    $found=false;
    $old_content = explode("\n",file_get_contents("testfile.txt"));
    for ($i=0; $i < count($old_content); $i++) { 
        $name=explode("'",explode(":",$old_content[$i])[1])[1];
        $ps=explode("'",explode(":",$old_content[$i])[2])[1];
        echo "Name $name $ps<br>";
        if(strpos($_GET["name"],$name)!==false){
            if(strpos($_GET["password"],$ps)!==false){
                $found=true;
                $act=$old_content[$i];
                echo $act;
            }
        }
        if($found==false){
            header("Location:login.html?msg=Invalid login");
            //die();
        }else{
            echo "found account";
            header("Location:login.html?act=$act&msg=Logged in");
            //die();
        }
    };
    //echo $old_content;
}
if(isset($_POST["Icon"])){
    //var_dump($_POST);
    $email=$_POST["email"];
    $img = $_POST['Icon'];
    /*define('icons', 'images/');
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);*/
    $filename=$email."_icon.txt";
    $myfile = fopen($filename, "w") or die("Unable to open file!");
	$data =$img;
	$success = file_put_contents($filename,$data);
    $old_content = explode("\n",file_get_contents($filename));
	print $success ? $data : 'Unable to save the file.';
}
if(isset($_GET["Icon"])){
    $email=$_GET["email"];
    $yes=file_exists($email."_icon.txt");
    $content=file_get_contents($email."_icon.txt");
    print $yes?$content:"no"; 
}
?>