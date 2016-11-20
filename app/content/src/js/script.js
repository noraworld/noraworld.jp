(() => {

  'use strict';

  smoothScroll.init();

  var scrollAnimationFlag = {
    profile:    null,
    works:      null,
    activities: null
  };
  var profilePosition    = document.querySelector(   '#profile .contents-box').getBoundingClientRect().top + window.pageYOffset + document.querySelector(   '#profile .contents-box').offsetHeight / 2;
  var worksPosition      = document.querySelector(     '#works .contents-box').getBoundingClientRect().top + window.pageYOffset + document.querySelector(     '#works .contents-box').offsetHeight / 2;
  var activitiesPosition = document.querySelector('#activities .contents-box').getBoundingClientRect().top + window.pageYOffset + document.querySelector('#activities .contents-box').offsetHeight / 2;

  // if a script is enabled, hide content to show with animations
  if (window.pageYOffset + window.innerHeight < profilePosition) {
    document.querySelector('#profile .contents-box .contents-wrapper').style.opacity = 0;
    scrollAnimationFlag['profile'] = true;
  }
  if (window.pageYOffset + window.innerHeight < worksPosition) {
    document.querySelector('#works .contents-box .contents-wrapper').style.opacity = 0;
    scrollAnimationFlag['works'] = true;
  }
  if (window.pageYOffset + window.innerHeight < activitiesPosition) {
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
    animateSlider(document.querySelector(   '#profile .contents-box .contents-wrapper'),     profilePosition,    'profile',  '100%');
    animateSlider(document.querySelector(     '#works .contents-box .contents-wrapper'),       worksPosition,      'works', '-100%');
    animateSlider(document.querySelector('#activities .contents-box .contents-wrapper'),  activitiesPosition, 'activities',  '100%');
  });

  // show content with slider animations
  var animateSlider = (element, position, flag, direction) => {
    if (window.pageYOffset + window.innerHeight > position && scrollAnimationFlag[flag]) {
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
