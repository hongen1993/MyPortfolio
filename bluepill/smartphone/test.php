<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="/src/assets/css/bluepill/smartphone/music.css" media="screen"/>

</head>
<body>
<div id="wrapper">
 <div id="iphone">
  <div id="camera">
   <span></span>
   <span></span>
  </div>
  <div id="screen">
   <div id="content-wrap">
    <div id="background"></div>
    <div id="content">
     <div id="header">
      <span id="menu-btn"><img src="https://emilcarlsson.se/assets/svg/menu.svg" alt="" class="svg"></span>
      <span id="options-btn"><img src="https://emilcarlsson.se/assets/svg/more.svg" alt="" class="svg"></span>
     </div>
     <div class="jcarousel">
      <ul id="songs">
      	<li class="song" data-audio="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Leo%20-%20Trying.mp3" data-color="#f38578">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/trying-album-cover.jpg">
			<p class="song-title">Trying</p>
			<p class="song-artist">Leo</p>
			</li>
      </ul>
     </div>
     <audio crossorigin>
				<source src="" type="audio/mpeg">
			</audio>
     <div id="controls">
      <span id="previous-btn"><i class="fa fa-step-backward fa-fw" aria-hidden="true"></i></span>
      <span id="play-btn"><i class="fa fa-play fa-fw" aria-hidden="true"></i></span>
      <span id="next-btn"><i class="fa fa-step-forward fa-fw" aria-hidden="true"></i></span>
     </div>
     <div id="timeline">
      <span id="current-time">--:--</span>
      <span id="total-time">--:--</span>
      <div class="slider" data-direction="horizontal">
				<div class="progress">
					<div class="pin" id="progress-pin" data-method="rewind"></div>
				</div>
			</div>
     </div>
     <div id="sub-controls">
      <i class="fa fa-random" aria-hidden="true"></i>
      <i class="fa fa-refresh" aria-hidden="true"></i>
      <i class="fa fa-bluetooth-b active" id="bluetooth-btn" aria-hidden="true"></i>
      <i class="fa fa-heart-o" id="heart-icon" aria-hidden="true"></i>
     </div>
    </div>
    <div id="overlay"></div>
   </div>
   <div id="sidemenu">
    <ul>
     <li>
      <i class="fa fa-search fa-fw" aria-hidden="true"></i>
			 Search
     </li>
     <li>
      <img class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/music-player.svg" alt="">
			 Playlists
     </li>
     <li>
      <img id="album-icon" class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/album-icon.svg" alt="">
      Albums
     </li>
     <li>
      <i class="fa fa-microphone fa-fw" aria-hidden="true"></i>
      Artists
     </li>
			<li>
				<i class="fa fa-podcast fa-fw" aria-hidden="true"></i>
				Podcasts
			</li>
			<li>
				<i class="fa fa-cog fa-fw" aria-hidden="true"></i>
				Settings
			</li>
    </ul>
   </div>
	 <div id="bluetooth-devices" class="menu">
			<span class="close-btn"><span>&times;</span> Close</span>
			<h3>Devices nearby</h3>
			<ul>
				<li class="connected">
					<img id="headphones-icon" class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/headphone.svg" alt="">
					<p>
						Major II Bluetooth
						<span>Connected</span>
					</p>
				</li>
				<li>
					<img id="headphones-icon" class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/loudspeaker.svg" alt="">
					<p>
						Sonos One
						<span>Connected</span>
					</p>
				</li>
				<li>
					<img id="headphones-icon" class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/car.svg" alt="">
					<p>
						Kia Motors
						<span>Connected</span>
					</p>
				</li>
			</ul>
			<p class="info-text">
				Make sure your bluetooth device is turned on and in range.
			</p>
		</div>
	 <div id="song-options" class="menu">
		 <span class="close-btn"><span>&times;</span> Close</span>
		 <div id="song-info">
		 	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg" alt="">
			 <div class="artist-wrap">
			 	<p>
			 		<span class="title">rockstar</span>
					<span class="artist">Post Malone, 21 Savage</span>
			 	</p>
			 </div>
		 </div>
	 	<ul>
	 		<li>
        <i class="fa fa-music fa-fw add" aria-hidden="true"></i>
				Add to playlist
			</li>
			<li>
				<i class="fa fa-microphone fa-fw" aria-hidden="true"></i>
				View Artist
			</li>
     <li>
      <img id="album-icon" class="svg menu-icons" src="https://emilcarlsson.se/assets/svg/compact-disc.svg" alt="">
      View Album
     </li>
			<li>
				<i class="fa fa-share-square-o fa-fw" aria-hidden="true"></i>
				Share
			</li>
	 	</ul>
	 </div>
	 <div id="home-screen">
		<div class="home-content">
			<h2>Music Player App</h2>
			<p id="made-by">Made by <a href="https://codepen.io/emilcarlsson">@emilcarlsson</a></p>
			<div class="app-icon">
				<img class="svg" src="https://emilcarlsson.se/assets/svg/music-note.svg" alt="">
			</div>
			<p id="icons-by">Icons by <a href="http://fontawesome.io/" title="Font Awesome">Font Awesome</a>, <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a>,<br /><a href="https://www.flaticon.com/authors/epiccoders" title="EpicCoders">EpicCoders</a> & <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a></p>
		</div>
	 </div>
  </div>
  <div id="home-btn"></div>
 </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://kit.fontawesome.com/c469a8b399.js" crossorigin="anonymous"></script>
    <script src="/public/bluepill/blocks/block17/office/smartphone/applications/musicc.js"></script>

</body>
</html>