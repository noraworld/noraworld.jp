(() => {

  'use strict';

  // fixs to rattle caused by view height (vh) on iOS
  if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
    document.querySelector('#canvas').style.height = window.innerHeight;
  }

})();
