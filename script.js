//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }

  navBar = document.querySelectorAll('.topnav');
  navBar.forEach(nav => {
    if (document.body.scrollTop > 490 || document.documentElement.scrollTop > 490) {
      nav.style.backgroundColor = 'black';
    } else {
      nav.style.backgroundColor = 'transparent';
    }
  });
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).scroll(function () {
  parallaxFunction();
})

function parallaxFunction() {
  var wScroll = $(window).scrollTop();
  console.log(wScroll);
  $('.hero-image').css('background-position', 'center ' + wScroll * 0.5 + 'px');
}