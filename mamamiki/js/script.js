$(document).ready(function() {   
    var sideslider = $('[data-toggle=collapse-right]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
        $('.navbar-toggle.x').toggleClass('collapsed');
        var navbarToggleX = $('.navbar-toggle.x');
        if (navbarToggleX.attr('aria-expanded')) {
            navbarToggleX.removeAttr('aria-expanded');
        } else {
            navbarToggleX.attr('aria-expanded', true);
        }
    });
    var slideUp = $('[data-toggle=collapse]');
    slideUp.click(function(){
        var teks = slideUp.text();
        slideUp.text(teks == "Close" ? "Area" : "Close");
    });



});