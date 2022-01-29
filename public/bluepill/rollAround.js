 if($(window).width() >= 1024){
     
}else{ 
  function rollright() {
    $('.bodyAdd').animate({ 'left': '-550px' },2000);
};
function rollleft() {
  $('.bodyAdd').animate({ 'left': '-420px' },2000);
};
window.onload = setTimeout(rollright, 28000), setTimeout(rollleft, 30000);   
}
