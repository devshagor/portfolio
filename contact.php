<?php
    $name = $_GET['name'];
    $email =$_GET['email'];
    $msg = $_GET['msg'];
    $to ='shagors333@gmail.com';
    echo $name;
    $message = $name.'<br><br>';
    $message .= $email.'<br><br>';
    $message .= $msg.'<br>';
    $message .= 'Good Bless You';
    
    $headers = "MIME-Version: 1.0" ."r\n";
    $headers .= "content-type:text/html;charset:UTF-8"."r\n";
    
    //more header
    $headers .='From: <'.$email.'>'."r\n";
    
    mail($to, $headers, $message);
    header('location:f.html');
?>