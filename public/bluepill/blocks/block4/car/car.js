if($(window).width() >= 1024){
  $('#exit').click(function() {
    
    const Player = {
    el: document.getElementById('showcase'),
    x: 200,
    y: 100,
    speed: 10,
    move() {
      this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
  };
  
  const K = {
    fn(ev) {
      const k = ev.which;
      if (k >= 65 && k <= 87) {
        ev.preventDefault();
        K[k] = ev.type === "keydown"; // If is arrow
      }
    }
  };
  
  const update = () => {
    let dist = K[87] && (K[65] || K[68]) || K[83] && (K[65] || K[68]) ? 0.707 : 1;
    dist *= Player.speed;
    if (K[65]) Player.x -= dist;
    if (K[87]) Player.y -= dist;
    if (K[68]) Player.x += dist;
    if (K[83]) Player.y += dist;
    Player.move();
  }
  
    document.addEventListener('keydown', K.fn);
    document.addEventListener('keyup', K.fn);

  setTimeout(function() {
    (function engine(){
      update();
      window.requestAnimationFrame(engine);
    }
    ());
  }, 2500);
  });
}