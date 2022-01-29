<?php 
include "languages/configuration.php"
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo $lang['cssStyle']?>
    <title>Hongen Shyu Barcel</title>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/blur.css" media="screen" />
</head>
<body class="myElement">
   
    <div id="myDIV">
        <div class="hands">
            <div id="container">
            <div class="imgHand"></div>
            <div class="imgHandB"></div>
                    <div class="efectoM">
                        <p class="line lineborder anim-typewriter" id="textWritter" ><?php echo $lang['pillsPO'] ?></p>
                    </div>
                <button class="ldng blue" onclick="blurButton(); redirectCustomBP()" id="blueO"></button>
                <button class="ldng red" onclick="blurButtonB(); redirectCustomRP()" id="redO"></button>
                    <div class="efectoMT" id="textWritterTwo">
                        <p class="lineTwo lineborderTwo anim-typewriterTwo" id="lineborderTwoX"><?php echo $lang['pillsPT'] ?></p>
                    </div>
                    <div class="lineThree lineborderThree anim-typewriterThree" id="textWritterThree">
                        <p><?php echo $lang['pillsPThree'] ?></p>
                    </div>
                    <div class="efectoMF" id="textWritterFour">
                        <p class="lineFour anim-typewriterFour" ><?php echo $lang['pillsPF'] ?></p>
                    </div>
                    <div class="langP"><a href="index.php?lang=es" class="hoverL">ES </a><span>|</span><a href="index.php?lang=en" class="hoverL"> EN </a><span>|</span><a href="index.php?lang=ch" class="hoverL">中 </a></div>
            </div>
        </div>
    </div>
<!--         <div id="topW"></div>
        <div id="bottomW"></div>
        <div id="leftW"></div>
        <div id="rightW"></div> 
        <script src="public/pills/dotSize.js"></script> -->
    <!-- <script src="public/pills/hidebutton.js"></script> -->
    <script src="public/pills/blurButton.js"></script>
    <script src="public/pills/blurButtonB.js"></script>
    <script src="public/pills/toPageRP.js"></script> 
    <script src="public/pills/toPageBP.js"></script>
    <script src="public/pills/pills.js"></script>
</body>
</html>