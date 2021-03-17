$(document).ready(function () {
      $(".icone-menu").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});


function validation() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var message = document.getElementById("message").value;

      console.log("nom", name);

      if (name !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && message !== "" && phone !== "") {
            Swal.fire({
                  icon: 'success',
                  title: 'Merci',
                  text: 'Votre message a été envoyé !',
                  showConfirmButton: false,
            })
      } else {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Il faut remplir tous les champs et saisir une adresse email valide !',
            })
      }
}

function validationFooter() {
      var name = document.getElementById("name2").value;
      var email = document.getElementById("email2").value;
      var phone = document.getElementById("phone2").value;

      console.log("nom", name);

      if (name !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && phone !== "") {
            Swal.fire({
                  icon: 'success',
                  title: 'Merci',
                  text: 'Votre message a été envoyé !',
                  showConfirmButton: false,
            })
      } else {
            Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Il faut remplir tous les champs et saisir une adresse email valide !',
            })
      }
}

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