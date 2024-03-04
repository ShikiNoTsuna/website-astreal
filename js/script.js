/*
Script js pour le menu
*/

$("#toggle").click(function() {

$(this).toggleClass('on');
$("#resize").toggleClass("active");
});

// Smooth Scroll Menu
$('.smooth').on('click', function() { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 850; // Durée de l'animation (en ms)
            $('html, body').animate( { scrollTop: $(page).offset().top - $('header').height() }, speed ); // Go
            $('nav-item').removeClass('active');
            $(this).parent().addClass('active');
            return false;
      });
