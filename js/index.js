
// Create a 'sticky' sidebar. ie. Once the sidebar reaches
// the top of the window, it becomes `fixed`.

const sidebar = document.getElementById('sidebar');
const header = document.getElementById('page-header');
const startScroll = 9000;
const slowScrollOffset = 10
// let sidebarBox = sidebar.getBoundingClientRect();
window.addEventListener("scroll", () => {
  let sidebarBox = sidebar.getBoundingClientRect();
  let headerBox = header.getBoundingClientRect();
  console.log(window.pageYOffset);
  if(headerBox.bottom <= 0){
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
  } else {
    sidebar.style.position = "absolute";    
  }
  //Scroll the sidebar up/down to keep "spied" recievers in view  
  sidebar.scrollTop = (window.pageYOffset - startScroll) / slowScrollOffset;

});

//End Sticky sidebar

//???
// var stickyElements = document.getElementsByClassName('sticky');

// for (var i = stickyElements.length - 1; i >= 0; i--) {
//     Stickyfill.add(stickyElements[i]);
// }
