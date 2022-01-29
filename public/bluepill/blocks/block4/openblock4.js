if($(window).width() >= 1024){
    $('#garage').click(function() {

       //building

       $('#world').addClass('worldGarage');
       $('#world').removeClass('worldBack');
       $('#world').removeClass('worldCBack');
       $('#world').removeClass('worldGarageBack');
       $('#world').removeClass('worldOfficeBack');    

       $('.block-4').addClass('block-4Expand')
       $('.block-4').removeClass('block-4Back')
       $('.block-4').removeClass('block-4BackB')

       $('#top4').addClass('top-4Expand')
       $('#top4').removeClass('top-4Back')

       $('#west4').addClass('west-4Expand')
       $('#west4').removeClass('west-4Back')
       $('#west4')
       .delay(3000)
       .queue(function(west){
         $(this).css('border-left', 'none');
         $(this).css('border-top', 'none');
         west(); 
       });

       $('#east4').addClass('east-4Expand')
       $('#east4').removeClass('east-4Back')
       $('#east4')
       .delay(3000)
       .queue(function(east){
         $(this).css('border-right', 'none');
         $(this).css('border-top', 'none');
         east(); 
       });

       $('#north4').addClass('north-4Expand')
       $('#north4').removeClass('north-4Back')
       $('#north4')
       .delay(3000)
       .queue(function(north){
         $(this).css('border', 'none');
         north(); 
       });

       $('#garage').addClass('south-4Expand')
       $('#garage').removeClass('closeGarage')
       $('#garage')
       .delay(1000)
       .queue( function(garage){ 
       $(this).css('background', 'linear-gradient(-45deg,rgba(1,178,0,1), rgba(0,0,0,1))');
       garage(); 
       });

       //blocks matrix letters

       $('.south4 pre')
       .delay(6500)
       .queue( function(pre){ 
       $(this).css('display', 'none');
       pre(); 
       });

       $('.west4 pre')
       .delay(6000)
       .queue( function(pre){ 
       $(this).css('display', 'none');
       pre(); 
       });

        // car display
        $('#showcase')
        .delay(1000)
        .queue( function(carDisplay){ 
          $(this).css('display','none');
          carDisplay(); 
        });

        $('#showcase')
        .delay(4500)
        .queue( function(car){ 
          $(this).css('display','block');
          $(this).css('top','-785px');
          $(this).css('left','565px');
          $(this).css('transform','translate(200px, 100px) !important');
          car(); 
        });

        $('.car')
        .delay(1000)
        .queue( function(carDisplay){ 
          $(this).css('transform','translate(-50px, -50px) translateZ(90px) rotateX(0deg) rotateY(180deg)');
          carDisplay(); 
        });

        $('.shadow')
        .delay(1000)
        .queue( function(carDisplay){ 
          $(this).css('transform', 'translate(-160px, -25px) translateZ(90px) rotateX(90deg) rotateY(0deg)');
          $(this).css('transform-origin', '0% 0%');
          $(this).css('height', '200px');
          $(this).css('width', '120px');
          carDisplay(); 
        });


        // rotate car and exit 

        $('#turnLeft')
        .delay(4000)
        .queue(function(rotateL){
          $(this).css('opacity', '1');
          rotateL();
        });

        $('#turnRight')
        .delay(5000)
        .queue(function(rotateR){
          $(this).css('opacity', '1');
          rotateR();
        });

        $('#exit')
        .delay(5000)
        .queue(function(exit){
          $(this).css('opacity', '1');
          exit();
        });

        // inputs 

        $('.action')
        .delay(5000)
        .queue(function(inputs){
          $(this).css('opacity', '1');
          inputs(); 
        });

    }
    )}else{

    };
