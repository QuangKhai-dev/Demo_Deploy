function scrollIntoEle (event) {
let id = event.target.getAttribute("data-id");
document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    inline:"center"
})
var w = window.innerWidth;
if (w<1200){
    document.getElementById("openMenu").style.display = "flex";
    document.getElementById("closeMenu").style.display = "none";
}
}