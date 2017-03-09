/* Add a Scrollspy to highlight a menu bar as the content becomes visible in the window.
  ** Usage: Add a class .spy-target to the container you want watch for in the window.
            Add the class .spy-rec to the menu item you want to recieve the new style.
            Create a class .spied that will get applied to the .spy-rec class when the
            .spy-target enters the window.
  **Note: In order to make this Scrollspy as hands off as possible, the order of the 
          .spy-rec elements must be in the same order as the .spy-targets.
*/
const body = document.body;
const spyTargets = [].slice.call(document.querySelectorAll(".spy-target"));
const recItems = [].slice.call(document.querySelectorAll(".spy-rec"));
const threshold = 100;

window.onscroll = () => {
  spyTargets.forEach( (el, index) => {
    if(isVisible(el, index)){
      recItems[index].classList.add('spied'); 
    } else{
      recItems[index].classList.remove('spied');
    }
  });
};   

function isVisible(element, i){
  const rect = element.getBoundingClientRect();
  const winH = window.innerHeight;
  //console.log(`El: ${i + 1} Top: ${rect.top} Bottom: ${rect.bottom}  Window: ${winH}`);
  return rect.top - threshold < winH 
    && rect.bottom + threshold > winH;
}
