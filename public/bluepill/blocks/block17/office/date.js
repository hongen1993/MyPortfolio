function computerDate(){
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output =

    ((''+day).length<2 ? '0' : '') + day + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    d.getFullYear();

    document.getElementById("computerDate").innerText = output;
    document.getElementById("computerDate").textContent = output;
    
}

computerDate();