$('.closeB').on('click', function() {
    if ($('#cubicle').hasClass('cubicleOnZoomB')) {
      $('#cubicle').removeClass('cubicleOnZoomB');
      $('#cubicle').addClass('cubicleOnZoomEnterB');
     }
     else
     {}
   });