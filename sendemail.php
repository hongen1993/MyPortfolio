<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once "PHPMailer/Exception.php";
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";


$mail = new PHPMailer(true);
$alert = '';

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    try{
        $mail->isSMTP();
        $mail->Host = "a2plcpnl0260.prod.iad2.secureserver.net";
        $mail->SMTPAuth = true;
        $mail->Username = "hongen1993@hongen.es";
        $mail->Password = "50102505Hsb";
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('hongen1993@hongen.es');
        $mail->addAddress('hongen1993@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = "<h3>Name : $name <br>Email:$email <br>Message : $message</h3>";

        $mail->send();
        $alert = '¡Mensaje enviado!Gracias por contactar conmigo';
    }catch (Exception $e){
        $alert = $e->getMessage();
    }
}
?>
