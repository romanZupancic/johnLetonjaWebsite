var target = new Date("Oct 22, 2018 08:00:00")
function pad(i) {
    return (10>i) ? "0" + i.toString() : i.toString();
};

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = target - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("voteClock").innerHTML = "VOTE IN: " + pad(days) + "d " + pad(hours) + "h "+ pad(minutes) + "m " + pad(seconds) + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("voteClock").innerHTML = "VOTE NOW";
    }
}, 1000);

/* Lightbox Enable */
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/* On hover popovers */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});