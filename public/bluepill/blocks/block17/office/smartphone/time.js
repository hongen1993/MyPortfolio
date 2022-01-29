function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
};

showTime();

function showTimeB(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m ;
    document.getElementById("MyClockDisplayB").innerText = time;
    document.getElementById("MyClockDisplayB").textContent = time;
    
    setTimeout(showTimeB, 1000);
    
};

showTimeB();

function showTimeC(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m ;
    document.getElementById("MyClockDisplayC").innerText = time;
    document.getElementById("MyClockDisplayC").textContent = time;
    
    setTimeout(showTimeC, 1000);
    
};

showTimeC();