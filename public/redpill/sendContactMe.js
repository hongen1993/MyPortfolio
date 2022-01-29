  $(document).ready(function(){
    $('form').on("submit",function(){
      $(document.body).addClass("sent");
    });
    $('form').submit( function(event) {
      var formId = this.id,
          form = this;
      mySpecialFunction(formId);
  
      event.preventDefault();
  
      setTimeout( function () { 
          form.submit();
      }, 3000);
  }); 
  });
