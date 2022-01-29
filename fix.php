<header class="screenMarginT">
      <div id="showFadeOut" class="animatedOut animatedOutB">        
        <h1 class="headerR"><?php echo $lang['headerR'] ?></h1>
      </div>
    </header>


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