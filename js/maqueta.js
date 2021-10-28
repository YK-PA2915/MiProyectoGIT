$(document).ready(main);
var contador =1;

function main() {
    $(".menu-hamburger").click(function() {
        if(contador ==0) {
            $("nav").animate({
                left: "0"
            });
            contador=1;
        }
        else {
            $("nav").animate({
                left: "-100%"

            });
            contador=0;
        }
    });
    $(".nav-bar").click(function() {
        $(this).menu(".menu").slideToggle();
    });
}