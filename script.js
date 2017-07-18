$(document).ready(function () {
  // Path endpoint of url
  var path = window.location.pathname;

  // To change the color of a nav button based on url
  switch (path) {
    case '/index.html':
      $('header > nav > a:nth-of-type(1)').addClass('active');
      break;
    case '/about.html':
      $('header > nav > a:nth-of-type(2)').addClass('active');
      break;
    case '/gallery.html':
      $('header > nav > a:nth-of-type(3)').addClass('active');
      break;
    case '/contact.html':
      $('header > nav > a:nth-of-type(4)').addClass('active');
      break;
  }

});