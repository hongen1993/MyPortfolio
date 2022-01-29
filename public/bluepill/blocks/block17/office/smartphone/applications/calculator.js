$('.calculator').click(function(){

    // display calculator 

    $('.calculatorO').removeAttr('id', 'noneDisplay')

    // dont display applications icons 

    $('.phone').attr('id','noneDisplay');
    $('.messages').attr('id','noneDisplay');
    $('.chrome').attr('id','noneDisplay');
    $('.whatsappBP').attr('id','noneDisplay');
    $('.wechat').attr('id','noneDisplay');
    $('.instagram').attr('id','noneDisplay');
    $('.calculator').attr('id','noneDisplay');
    $('.music').attr('id','noneDisplay');
})

  // display value
  function displayValue(val) {
    document.getElementById("result").value += val;
  }
  
  // evaluates the digit and return result
  function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
  }
  
  // clear the result
  function clearResult() {
    document.getElementById("result").value = "";
  }
  