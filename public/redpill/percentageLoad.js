function percentage(){
    var percent = document.getElementById('introPercent');
    var blurO = document.getElementById('blurPillB');
    blurO.classList.add("introNone");
    percent.classList.add("introNone");
  } 
window.onload = setTimeout(percentage, 7200);