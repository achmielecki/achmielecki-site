$(function menu(){
    $('aside span.expand').click(function(){
        $('aside nav').slideToggle();
    })
});
window.addEventListener("keydown", function(e) {
    
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);