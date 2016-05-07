$(function() {
  $('#typed').typed({
    strings: ['> welcome to my webpage^300<br>> ^300i love coding'],
    typeSpeed: 30,
    startDelay: 300,
    loop: false,
    cursorChar: '_',
    contentType: 'html',
  });
  $('#notfound-typed').typed({
    strings: ['> 404 not found^300<br>> ^300<a href="/">go to the front page</a>'],
    typeSpeed: 30,
    startDelay: 300,
    loop: false,
    cursorChar: '_',
    contentType: 'html',
  });
});
