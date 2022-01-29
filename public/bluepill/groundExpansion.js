function ground(){
    var firstEx = document.getElementById('ground');
    
    firstEx.classList.add("groundExpand");
  } 
  function world(){

    $('#blurPillBB').removeAttr('id', 'blurPillBB');
    $('.bodyAdd').attr('id','worldExpand');
    $('.fountain').addClass('fountainOn');

  }
window.onload = setTimeout(ground, 8900), setTimeout(world, 28000);
