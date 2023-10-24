$(document).ready(function () {
  var w = window.innerWidth;
if (w<1200){
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  navLinks.forEach((l) => {
    l.addEventListener("click", () => {
      bsCollapse.toggle();
    }); 
  });
}
  
});
