<?php
if(isset($_POST["submit"])){
    $name=$_POST["name"];
    $subject=$_POST["subject"];
    $mailFrom=$_POST["email"];
    $message=$_POST["message"];

    $mailTo="naquangaston@gmail.com";
    $headers="From: ".$mailFrom;
    $txt="You have received an e-mail from".$name.".\n\n".$message;

   $yes= mail($mailTo,$subject,$txt,$headers);
    header("Loction:commet.html#mailsent");
    print $yes?"yes":"no";
}
?>