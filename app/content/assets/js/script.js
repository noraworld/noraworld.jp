(function() {

  'use strict';

  smoothScroll.init();

  var scrollAnimationFlag = {
    profile:    null,
    works:      null,
    activities: null
  };

  if (document.body.scrollTop < 550) {
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

  document.querySelector('.scroll-down').addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll.animateScroll(document.querySelector('#profile'));
  });

  window.addEventListener('scroll', () => {

    animateSlider(document.querySelector('#profile .contents-box .contents-wrapper'), 550, 'profile');
    animateSlider(document.querySelector('#works .contents-box .contents-wrapper'), 1156, 'works');
    animateSlider(document.querySelector('#activities .contents-box .contents-wrapper'), 1740, 'activities');

  });

  var animateSlider = (element, position, flag) => {
    if (document.body.scrollTop > position && scrollAnimationFlag[flag]) {
      element.animate({
        opacity: [0, 1],
        transform: ['translate(100%, 0)', 'translate(0, 0)'],
      }, {
        duration: 500,
        iterations: 1,
        easing: 'ease-in-out',
      }).onfinish = () => {
        element.style.opacity = 1;
        scrollAnimationFlag[flag] = false;
      }
    }
  }

}());
