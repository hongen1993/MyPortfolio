$('.computerScreenFrame').on('click', function() {
    if ($('#cubicle').hasClass('cubicleOnZoomA')) {
      $('#cubicle').removeClass('cubicleOnZoomA');
      $('#cubicle').addClass('cubicleOnZoomEnterA');
      $('.computerScreenFrame').removeClass('computerScreenFrameZoom');
     }
     else
     {
      $('#cubicle').addClass('cubicleOnZoomA');
      $('#cubicle').removeClass('cubicleOnZoomEnterA');
      $('#cubicle').removeClass('cubicleOnZoomEnterB');
      $('.computerScreenFrame').addClass('computerScreenFrameZoom');
     }
   });
   $('.toZoom').on('click', function() {
    if ($('#cubicle').hasClass('cubicleOnZoomB')) {
     }
     else
     {
      $('#cubicle').addClass('cubicleOnZoomB');
      $('#cubicle').addClass('cubicleOnZoomBFix');
      $('.toZoom').addClass('computerScreenFrameNormal');
      $('#cubicle').removeClass('cubicleOnZoomEnterA');
      $('#cubicle').removeClass('cubicleOnZoomEnterB');
     }
   });
   $('.closeB').on('click', function() {
    if ($('#cubicle').hasClass('cubicleOnZoomBFix')) {
      $('#cubicle').removeClass('cubicleOnZoomB');
      $('#cubicle').removeClass('cubicleOnZoomBFix');
      $('.toZoom').removeClass('computerScreenFrameNormal');
      $('#cubicle').addClass('cubicleOnZoomEnterB');

     }
     else
     {}
   });
  