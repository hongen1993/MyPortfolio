$(document).ready(function() {
  if($(window).width() >= 1024){
    $('#exit').click(function() {

      var rotation = 0;
      $(document).on('keydown', function(e) {
          var keyCode = e.keyCode;
          var div = $(".car");
          e.preventDefault();
      
          if (keyCode === 37) {
              rotation += 45;
              div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY('+rotation+'deg)');
            }
        
        });
      
      $(document).on('keydown', function(e) {
        var keyCode = e.keyCode;
        var div = $(".car");
        e.preventDefault();
    
        if (keyCode === 39) {
          rotation -= 45;
          div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY('+rotation+'deg)');
        }
      
      });
      $(document).on('keydown', function(e) {
          var keyCode = e.keyCode;
          var div = $(".car");
          var divB = $(".shadow");
          e.preventDefault();
      
          if (keyCode === 87) {
            div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY(0deg)');
            divB.css('transform','translate(-59px, -25px) translateZ(-100px) rotateX(90deg)rotateY(0deg)');
            divB.css('transform-origin', '0% 0%');
            divB.css('width', '120px');
            divB.css('height', '200px');
          }
        
        });
        $(document).on('keydown', function(e) {
          var keyCode = e.keyCode;
          var div = $(".car");
          var divB = $(".shadow");
          e.preventDefault();
      
          if (keyCode === 83) {
            div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY(180deg)');
            divB.css('transform','translate(-162px, -25px) translateZ(90px) rotateX(90deg) rotateY(0deg)');
            divB.css('transform-origin', '0% 0%');
            divB.css('width', '120px');
            divB.css('height', '200px');
          }
        
        });
        $(document).on('keydown', function(e) {
          var keyCode = e.keyCode;
          var div = $(".car");
          var divB = $(".shadow");

          e.preventDefault();
      
          if (keyCode === 65) {
            div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY(90deg)');
            divB.css('transform','translate(-240px, -25px) translateZ(20px) rotateX(90deg)rotateY(0deg)')
            divB.css('transform-origin', '0% 0%');
            divB.css('width', '200px');
            divB.css('height', '120px');
          }
        
        });
        $(document).on('keydown', function(e) {
          var keyCode = e.keyCode;
          var div = $(".car");
          var divB = $(".shadow");
          e.preventDefault();
      
          if (keyCode === 68) {
            div.css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY(-90deg)');
            divB.css('transform','translate(-65px, -25px) translateZ(75px) rotateX(90deg)rotateY(0deg)');
            divB.css('transform-origin', '0% 0%');
            divB.css('width', '200px');
            divB.css('height', '120px');
        }
        
        });
      });
    }
    });
