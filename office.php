<div class="cubicle" id="noneDisplay">
  <div class="floor">
    <p><?php echo $lang['backBlock11'] ?></p>
  </div>
  <div class="leftWall"></div>
  <div class="leftMidWall"></div>
  <div class="rightMidWall"></div>
  <div class="rightWall"></div>
  <div class="deskTop" ></div>
  <div class="deskSide" ></div>
  <div class="draws" ></div>
  <div class="handleTop" ></div>
  <div class="handleMid" ></div>
  <div class="handleBottom" ></div>
  <div class="keyboard" ></div>
  <div class="mouse" ></div>
  <div class="computerStand" ></div>
  <div class="computerScreenFrame">
    <video loop preload="metadata" class="gypt" poster="/src/assets/img/hjshop.png">
      <source src="/src/assets/videos/lenceriaideal.mp4"  type="video/mp4">
      <?php echo $lang['videoError'] ?>
    </video>  
  </div>
  <div class="computerStandB" ></div>
  <div class="computerScreenFrameB">
    <div class="computerScreenFrameBMac">
      <img src="/src/assets/img/desktop.png" alt="desktop">
      <div id="MyClockDisplayC" class="computerTime" onload="showTimeC()"></div>
      <div id="computerDate" class="computerDate" onload="computerDate()"></div>
      <div id="myModalB" class="modalB">
      <span class="closeB">&times;</span>    
      <div class="toZoom"></div>

      <!-- Modal content -->
      <div class="modal-contentB">
      <form method="POST" action="" id="myFormB">
        <div class="wrapperCB centeredB">
          <div class="letterB">
            <div class="sideB">
              <h1><?php echo $lang['letterHO'] ?></h1>
              <p class="full">
                  <textarea name="message" placeholder="<?php echo $lang['letterTextArea'] ?>" id="body" required></textarea>
              </p>
            </div>
            <div class="sideB">
              <p>
                <input type="text" name="name" placeholder="<?php echo $lang['letterName'] ?>" required>
              </p>
              <br>
              <p>
                <input type="email" name="email"  placeholder="<?php echo $lang['letterEmail'] ?>" required>
              </p>
              <br>
              <p>
              <button type="submit" name="submit" class="buttonStyleB" id="sendLetterB"><?php echo $lang['letterButton']?></button>
              </p>
            </div>
          </div>
          <div class="envelopeB frontB"></div>
          <div class="envelopeB backB"></div>
        </div>
        <p class="result-messageB centeredB"><?php echo $lang['letterSuccess'] ?></p>
      </form>
      </div>
    </div>
      </div>
      <i class="fab fa-apple"></i>
  </div>

<!--   <div class="computerScreen" ></div>
 <div class="seat" ></div> -->
  <div class="bin" ></div>
  <div class="binTop" ></div>
  <div class="binBottom" ></div>
  <div class='kettle'>
      <div class='top'></div>
      <div class='bottom'></div>
      <div class='handle'></div>
      <div class='other-stuff'></div>
    </div>
    <div class='cup'></div>
    <div class='poster'>
      <img src="/src/assets/img/poster.png" style="height:100%; width:100%">
    </div>

    <div id='board'>
      <?php echo $lang['projects'] ?>
      <?php echo $lang['allprojects'] ?>
    </div>
    <div class="smartphoneBack" id="noneDisplay"></div>
    <?php include('bluepill/smartphone/phone.php'); ?>
  </div>

