<?php
 include 'sendemail.php';
 include "languages/configuration.php"
 ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $lang['title'] ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/src/assets/css/redpill/intro.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="/src/assets/css/redpill/blurRedPill.css" media="screen" />

    <?php echo $lang['cssStyle']?>
</head>
<body class="screenMargin">
    <div id="blurPillB"></div>
    <header class="screenMarginT">
      <div id="showFadeOut" class="animatedOut animatedOutB">        
        <h1 class="headerR"><?php echo $lang['headerR'] ?></h1>
      </div>
    </header>
    <?php echo "<script>console.log('.$alert.')</script>"; ?>
    <div class="body" id="introPercent">
    <section class="scene">
                <div class="rotor">
                <del class="hello" aria-hidden="true">
                    <time>          
                        <div class="percentage"></div>
                    </time>
                </del><ins class="hello" aria-hidden="true">
                    <time>          
                        <div class="percentage"></div>
                    </time></ins>
                <del class="hello">
                    <time>          
                        <div class="percentage"></div>
                    </time>
                </del><ins class="hello">
                    <time>          
                        <div class="percentage"></div>
                    </time></ins>
                </div>
            </section> 
    </div>
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>    
      <form method="POST" action="" id="myForm">
        <div class="wrapperC centered">
          <div class="letter">
            <div class="side">
              <h1><?php echo $lang['letterHO'] ?></h1>
              <p>
                  <textarea name="message" placeholder="<?php echo $lang['letterTextArea'] ?>" id="body" required></textarea>
              </p>
            </div>
            <div class="side">
              <p>
                <input type="text" name="name" placeholder="<?php echo $lang['letterName'] ?>" required>
              </p>
              <p>
                <input type="email" name="email"  placeholder="<?php echo $lang['letterEmail'] ?>" required>
              </p>
              <p>
              <button type="submit" name="submit" class="buttonStyle" id="sendLetter"><?php echo $lang['letterButton']?></button>
              </p>
            </div>
          </div>
          <div class="envelope front"></div>
          <div class="envelope back"></div>
        </div>
        <p class="result-message centered"><?php echo $lang['letterSuccess'] ?></p>
      </form>
      </div>

    </div>
    <div class="backgroundBlack allTop">
      <div class=" animatedScroll animatedScrollB" id="scrll">
        <p class="hiddS"><?php echo $lang['scroll'] ?></p>
        <div class="xarrow xarrow-first noneDisplayX" id="firstxarrow"></div>
        <div class="xarrow xarrow-second noneDisplayX" id="secondxarrow"></div>
        <button class="hiddB"><?php echo $lang['scrollB'] ?></button>
        <button class="hiddU"><?php echo $lang['scrollC'] ?></button>
        <div class="arrow arrow-first" id="firstarrow"></div>
        <div class="arrow arrow-second" id="secondarrow"></div>
      </div>
    </div>
    <div class="backgroundWhite allTop" id="backSlide">
      <div class="sideBarButtonA">
        <p><?php echo $lang['aMe'] ?></p>
      </div>
      <div class="sideBarButton">
        <ul>
          <img class="imgBJJ" src="src/assets/img/Hongen.png">
          <li><h4><a href="/src/assets/pdf/curriculum.pdf" class="pdf"><?php echo $lang['sideBarHF']?></a></h4></li>
          <li><a href="/src/assets/pdf/curriculum.pdf" class="pdf"><?php echo $lang['sideBarP']?></a></li>
          <li id="litop">
             <a href="tel:644751012" class="phone"> <i class="fas fa-phone-square-alt"></i></a>          
            <button class="gmail" id="myBtn">
              <i class="far fa-envelope-open"></i>
            </button>
            <button onclick="window.location.href='<?php echo $lang['whatsapp'] ?>" class="whatsapp">
              <i class="fab fa-whatsapp" id="wasapotilo"></i></i>
            </button>
          </li>
        </ul>
    </div>
    <div class="sideBarButtonB">
          <img class="imgBJJB" src="src/assets/img/Hongen.png">
          <h4><a href="/src/assets/pdf/curriculum.pdf" class="pdf"><?php echo $lang['sideBarHF'] ?></a></h4>
          <p><a href="/src/assets/pdf/curriculum.pdf" class="pdf"><?php echo $lang['sideBarP']?></a></p>
          <div id="litop">
             <a href="tel:644751012" class="phone"> <i class="fas fa-phone-square-alt"></i></a>          
            <button class="gmail" id="myBtnB">
              <i class="far fa-envelope-open"></i>
            </button>
            <button onclick="window.location.href='<?php echo $lang['whatsapp'] ?>'" class="whatsapp">
              <i class="fab fa-whatsapp" id="wasapotilo"></i></i>
            </button>
          </div>
    </div>
    <div class="sideBarButtonC">
      <p><?php echo $lang['aMe']?></p>
    </div>
      <div class="salute">
            <div class="saluteHello"><h1><?php echo $lang['salute'] ?></h1></div>
            <!-- <span class="halfStyle hs-base" data-content="l">l</span><span class="normalspan"></span> -->
            <div id="divToShowHideUp" class="animatedDown animatedDownB"><h2><?php echo $lang['fullstack'] ?></h2></div>
            <div id="divToShowHide" class="animated animatedB">
              <p class="pb">html, css, javascript, react, php, mysql & symfony</p>
              <p class="pa"><?php echo $lang['pa'] ?></p>
            </div>
            <div id="divToShowHideOne"class="animatedOne animatedOneB">            
              <div class="wrapper">
                  <div class="containerCard">
                        <a href="https://graciapaz.com" target="_blank">   
                          <video width="100%" height="100%" loop preload="metadata" class="gyp" poster="/src/assets/img/gyp.png">
                            <source src="/src/assets/videos/graciaypaz.mp4"  type="video/mp4">
                            <?php echo $lang['videoError'] ?>
                          </video>
                        </a>    
                  </div>
                  <div class="containerCard" id="secondCard">
                      <a href="/construction.php" target="_blank">
                        <video width="100%" height="100%" loop preload="metadata" class="gypt" poster="/src/assets/img/hjshop.png">
                          <source src="/src/assets/videos/lenceriaideal.mp4"  type="video/mp4">
                          <?php echo $lang['videoError'] ?>
                        </video>
                      </a>
                </div>
              </div>
            </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js" type="text/javascript"></script> 
    <script src="public/redpill/textOnScroll.js"></script>
    <script src="public/redpill/contactMe.js"></script>
    <script src="public/redpill/sendContactMe.js"></script>
    <script src="public/redpill/mobile/buttonscroll.js"></script>    
    <script src="public/redpill/mobile/buttonscrollB.js"></script>
    <script src="https://kit.fontawesome.com/c469a8b399.js" crossorigin="anonymous"></script>
    <script type="text/javascript">
      if(window.history.replaceState){
        window.history.replaceState(null, null, window.location.href);
      }
    </script>
    <script src="/public/redpill/gyp.js"></script>
    <script src="/public/redpill/wakala.js"></script>
    <script src="/public/redpill/percentage.js"></script>
    <script src="/public/redpill/remover.js"></script>
    <script src="/public/redpill/percentageLoad.js"></script>
    <!-- <script src="public/redpill/mobile/mobilescroll.js"></script> -->
</body>
</html>