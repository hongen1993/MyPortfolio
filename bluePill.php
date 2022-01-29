<?php 
include "languages/configuration.php";
 include 'sendemail.php';
 
 ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $lang['title'] ?></title>
    
    <!-- blur blue pill -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/blurBluePill.css" media="screen"/>

    <!-- tunel -->

    <link rel='stylesheet' type='text/css' href='/src/assets/css/bluepill/tunel.css' media='screen'/>

    <!-- main css -->

    <link rel='stylesheet' type='text/css' href='/src/assets/css/bluepill/bluePill.css' media='screen'/>

    <!-- matrix letters -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/matrixEffects.css" media="screen"/>

    <!-- octopus -->
    
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/octopus.css" media="screen"/>

    <!-- blocks -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/blocks/block4.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/blocks/block11.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/blocks/block17.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/blocks/block27.css" media="screen"/>

    <!-- car -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/car.css" id="computer" media="screen"/>
    
    <!-- office -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/office.css" media="screen"/>

    <!-- phone and apps-->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/smartphone/phone.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/smartphone/calculator.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/smartphone/whatsapp.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/smartphone/music.css" media="screen"/>

    <!-- fountain -->

    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/fountain.css" id="computer" media="screen"/>
    
</head>
<body id="blurPillBB">
  <div class="bg">
    <video width="100%" height="100%" loop preload="metadata" class="gyp" poster="/src/assets/img/gyp.png">
        <source src="/src/assets/videos/graciaypaz.mp4"  type="video/mp4">
        <?php echo $lang['videoError'] ?>
    </video>
  </div>
    <?php 
        include('office.php');
        include('bluepill/tunel.php');
        include("bluepill/octopus.php");
        include('bluepill/world.php');

    ?>
      <svg class='hide' xmlns="http://www.w3.org/2000/svg">
        <defs>
       <filter id='svg-blur-h'>
         <feGaussianBlur stdDeviation='5,0' />
       </filter>
       <filter id='svg-blur-v'>
         <feGaussianBlur stdDeviation='0,10' />
       </filter>
        </defs>
      </svg>

  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://kit.fontawesome.com/c469a8b399.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jcarousel/0.3.1/jquery.jcarousel.min.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/music.js"></script>

  <script src="/public/bluepill/tunel.js"></script>
  <script src="/public/bluepill/groundExpansion.js"></script>
  <script src="/public/bluepill/displayout.js"></script>
  <script src="/public/bluepill/rollAround.js" type="text/javascript" language="javascript"></script>

  <!-- Block 4 -->
  <script src="public/bluepill/blocks/block4/openblock4.js"></script>
  <script src="public/bluepill/blocks/block4/closeblock4.js"></script>

  <!-- Block 4 Car -->

  <script src="/public/bluepill/blocks/block4/car/car.js"></script>
  <script src="/public/bluepill/blocks/block4/car/carrotate.js"></script>
  <script src="public/bluepill/blocks/block4/car/carAnimations.js"></script>
  <script src="public/bluepill/blocks/block4/car/rotateL.js"></script>
  <script src="public/bluepill/blocks/block4/car/rotateR.js"></script>

  <!-- Block 11 -->

  <script src="/public/bluepill/blocks/block11/openblock11.js"></script>
  <script src="/public/bluepill/blocks/block11/closeblock11.js"></script>
  <script src="/public/bluepill/blocks/block11/gypclick.js"></script>
  <script src="/public/bluepill/blocks/block11/hjclick.js"></script>
  <script src="/public/bluepill/blocks/block11/gypclickBack.js"></script>
  <script src="/public/bluepill/blocks/block11/hjclickBack.js"></script>
  <script src="/public/bluepill/blocks/block11/block11on.js"></script>
  <script src="/public/bluepill/blocks/block11/block11off.js"></script>
  <script src="/public/bluepill/blocks/block11/frontIntroA.js"></script>
  <script src="/public/bluepill/blocks/block11/frontIntroABack.js"></script>
  <script src="/public/bluepill/blocks/block11/frontIntroB.js"></script>
  <script src="/public/bluepill/blocks/block11/frontIntroBBack.js"></script>
  <script src="/public/redpill/gyp.js"></script>
  <script src="/public/redpill/gypt.js"></script>

  <!-- Block 17 -->

  <script src="/public/bluepill/blocks/block17/openblock17.js"></script>
  <script src="/public/bluepill/blocks/block17/fullScreen.js"></script>
  <script src="/public/bluepill/blocks/block17/enterEffect.js"></script>

  <!-- Block 17 Office -->

  <script src="/public/bluepill/blocks/block17/office/hoverOnVideo.js"></script>
  <script src="/public/bluepill/blocks/block17/office/backToWorld.js"></script>
  <script src="public/redpill/sendContactMe.js"></script>
  <script src="public/bluepill/blocks/block17/office/date.js"></script>


  <!-- Block 17 Office Smartphone -->
  
  <script src="public/bluepill/blocks/block17/office/smartphone/phone.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/phoneBack.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/menuButtons/return.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/menuButtons/home.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/time.js"></script>

  <!-- Block 17 Office Smartphone Applications-->

  <script src="public/bluepill/blocks/block17/office/smartphone/applications/calculator.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/callMe.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/wechat.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/chrome.js"></script>



  <!-- Block 17 Office Smartphone Whatsapp-->

  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/whatsapp.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/contactMe.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/juliachat.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/juliachatB.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/whatsappButtonBackB.js"></script>
  <script src="public/bluepill/blocks/block17/office/smartphone/applications/whatsapp/whatsappChatBack.js"></script>

  <!-- Block 27 -->

  <script src="/public/bluepill/blocks/block27/button.js"></script>
  <script src="/public/bluepill/blocks/block27/openblock27.js"></script>
  <script src="/public/bluepill/blocks/block27/closeblock27.js"></script>

<!--   <script src="/public/redpill/percentageLoad.js"></script>
 -->
</body>
</html>