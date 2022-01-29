function tunel(){
    var dissappear = document.getElementById('tunnel');
    var boddyAdd = document.body;
    dissappear.classList.add("introNone");
    boddyAdd.classList.add("bodyAdd");
  } 
window.onload = setTimeout(tunel, 8000);