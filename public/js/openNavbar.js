document.getElementById('openMenu').style.display="flex"
document.getElementById('closeMenu').style.display="none"

$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        let attr = $(this).attr('aria-expanded');
        if (attr=='true'){
            document.getElementById('openMenu').style.display="none"
            document.getElementById('closeMenu').style.display="flex"
        }else{
            document.getElementById('openMenu').style.display="flex"
            document.getElementById('closeMenu').style.display="none"
        }
    })
})