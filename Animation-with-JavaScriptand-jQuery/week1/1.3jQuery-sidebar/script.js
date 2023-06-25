(function(){
    "use strict";
     //$('ul li ul').css("display", "none");
     $("ul li ul").hide();
     $(".menulink").click(function(){   
      var thismenu = $(this).next("ul");
      $("ul li ul").not(thismenu).hide();
      thismenu.toggle();
    });
})();