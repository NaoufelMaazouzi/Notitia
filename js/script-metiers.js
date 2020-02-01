$(document).ready(function() {
            $(".icone-menu").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      AOS.init({
        duration : 1500,
      });

      // Scrolling Effect

     // $(window).on("scroll", function() {
           // if($(window).scrollTop()) {
              //    $('nav').addClass('black');
           // }

           // else {
            //      $('nav').removeClass('black');
            //}
    //  })