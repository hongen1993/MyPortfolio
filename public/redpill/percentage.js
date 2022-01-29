function start() {
    var duration = 5000; // it should finish in 5 seconds !
    var st = new Date().getTime();
    var interval = setInterval(function() {
      var diff = Math.round(new Date().getTime() - st),
        val = Math.round(diff / duration * 100);
      val = val > 100 ? 100 : val;
      $(".percentage").text(val + "%");
      if (diff >= duration) {
        clearInterval(interval);
      }
    }, 100);
  }
  
  start()