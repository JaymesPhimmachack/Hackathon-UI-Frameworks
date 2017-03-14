
// Create a 'sticky' sidebar. ie. Once the sidebar reaches
// the top of the window, it becomes `fixed`.

// const sidebar = document.getElementById('sidebar');
// // let sidebarBox = sidebar.getBoundingClientRect();
// window.addEventListener("scroll", () => {
//   let sidebarBox = sidebar.getBoundingClientRect();
//   if(sidebarBox.top <= 0){
//     sidebar.classList.add("is-sticky");
//     console.log(`is-sticky - top: ${sidebarBox.top}`);
//   } else {
//     sidebar.classList.remove("is-sticky");
//     console.log(`NOT-sticky - top: ${sidebarBox.top}`);
//   }
// });

var stickyElements = document.getElementsByClassName('sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}
