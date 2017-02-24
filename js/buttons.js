
/**
 * Created by hiepvo on 1/24/17.
 */
(function(){
  var init = {};

  var transitionEnd  = transitionEndEventName();
  var btnWaveEffects = document.querySelectorAll('.waves-effect');

  var cleanUp = function(){
    var spans = document.querySelectorAll('.waves-effect--show');
    setTimeout(function(){
      for(var i = 0; i < spans.length; i++){
        spans[i].remove();
      }
    }, 500);
  }

  var addWaveEffect = function(e){
    this.removeEventListener(transitionEnd, addWaveEffect);
    var rect       = this.getBoundingClientRect();
    var span       = document.createElement('span');
    span.className = 'waves-effect__span';

    this.appendChild(span);
    var posX         = this.offsetLeft,
        posY         = this.offsetTop,
        buttonWidth  = this.offsetWidth,
        buttonHeight = this.offsetHeight;

    //make it round
    if(buttonWidth >= buttonHeight){
      buttonHeight = buttonWidth;
    } else{
      buttonWidth = buttonHeight;
    }

    span.style.height = buttonHeight + 'px';
    span.style.width  = buttonWidth + 'px';

    var top  = e.pageY - posY - buttonHeight / 2;
    var left = e.pageX - posX - buttonWidth / 2;

    span.style.top  = top + 'px';
    span.style.left = left + 'px';

    addClass(span, 'waves-effect--show');
    cleanUp();
  }

  for(var i = 0; i < btnWaveEffects.length; i++){
    btnWaveEffects[i].addEventListener('click', addWaveEffect, false);
  }

  function hide(el, time){
    setTimeout(function(){
      addClass(el, 'hide');
    }, time);
  }

  function show(el, time){
    setTimeout(function(){
      removeClass(el, 'hide');
    }, time);
  }

  function transitionEndEventName(){
    var i,
        undefined,
        el          = document.createElement('div'),
        transitions = {
          'transition': 'transitionend',
          'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
          'MozTransition': 'transitionend',
          'WebkitTransition': 'webkitTransitionEnd'
        };

    for(i in transitions){
      if(transitions.hasOwnProperty(i) && el.style[i] !== undefined){
        return transitions[i];
      }
    }
  }

  function hasClass(el, className){
    if(el.classList)
      return el.classList.contains(className);
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className){
    if(el.classList)
      el.classList.add(className);
    else if(!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className){
    if(el.classList)
      el.classList.remove(className);
    else if(hasClass(el, className)){
      var reg      = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }

  /*-------------------------------*/

  window.init = init;

})(window);

