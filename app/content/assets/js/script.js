(function() {

  "use strict";

  var scrollButton = document.querySelector('#profile');
  var rect = scrollButton.getBoundingClientRect();
  var profilePositionX = rect.left + window.pageXOffset;
  var profilePositionY = rect.top  + window.pageYOffset;

  document.querySelector('.scroll-down').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(profilePositionX, profilePositionY);
  });

}());
