(() => {

  'use strict';

  smoothScroll.init();

  var scrollAnimationFlag = {
    profile:    null,
    works:      null,
    activities: null
  };

  // if a script is enabled, hide content to show with animations
  if (document.body.scrollTop < 280) {
    document.querySelector('#profile .contents-box .contents-wrapper').style.opacity = 0;
    scrollAnimationFlag['profile'] = true;
  }
  if (document.body.scrollTop < 1156) {
    document.querySelector('#works .contents-box .contents-wrapper').style.opacity = 0;
    scrollAnimationFlag['works'] = true;
  }
  if (document.body.scrollTop < 1740) {
    document.querySelector('#activities .contents-box .contents-wrapper').style.opacity = 0;
    scrollAnimationFlag['activities'] = true;
  }

  // click a down arrow to scroll down to profile content
  document.querySelector('.scroll-down').addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll.animateScroll(document.querySelector('#profile'));
  });

  // work with each scroll action
  window.addEventListener('scroll', () => {
    animateSlider(document.querySelector(   '#profile .contents-box .contents-wrapper'),  280,    'profile',  '100%');
    animateSlider(document.querySelector(     '#works .contents-box .contents-wrapper'), 1156,      'works', '-100%');
    animateSlider(document.querySelector('#activities .contents-box .contents-wrapper'), 1740, 'activities',  '100%');
  });

  // show content with slider animations
  var animateSlider = (element, position, flag, direction) => {
    if (document.body.scrollTop > position && scrollAnimationFlag[flag]) {
      element.animate({
        opacity: [0, 1],
        transform: ['translate(' + direction + ', 0)', 'translate(0, 0)'],
      }, {
        duration: 250,
        iterations: 1,
        easing: 'ease-in-out',
      }).onfinish = () => {
        element.style.opacity = 1;
        scrollAnimationFlag[flag] = false;
      }
    }
  }

})();
