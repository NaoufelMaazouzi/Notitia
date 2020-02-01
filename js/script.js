$(document).ready(function() {
            $(".icone-menu").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      /* Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })*/

/* let header = document.querySelector("nav")
let minScrollValue = 15;

document.addEventListener('scroll',() => {
    let scrollValueOfPage  = document.documentElement.scrollTop;
    if(scrollValueOfPage < minScrollValue) {
        header.classList.remove("hidden");
    } else {
      header.classList.add("hidden");
    }
    minScrollValue = scrollValueOfPage;
}); */