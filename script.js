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

  // When a gallery img div is clicked
  $('body#gallery > section.container-fluid > div.row > div').click(function() {
    // Get the image url of the clicked image.
    var bg = $(this).css('background-image');
    // Set the overlay div's background to that image.
    $('body#gallery > section.overlay > div').css('background-image', bg);
    // Show the overlay.
    $('body#gallery > section.overlay').show();
  });
  $('body#gallery > section.overlay').click( function () {
    $('body#gallery > section.overlay').hide();
  });

});