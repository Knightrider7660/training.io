// Sticky Nav
$(function(){

    createSticky($("#header"));

});

function createSticky(sticky) {

    if (typeof sticky !== "undefined") {

        var	pos = sticky.offset().top,
            win = $(window);

        win.on("scroll", function() {
            win.scrollTop() >= pos ? sticky.addClass("fixed_nav") : sticky.removeClass("fixed_nav");
        });
    }
}

// Sticky Nav

$( document ).ready(function () {
    //Project start
    $("#project_section").owlCarousel({
        navigation : true,
        items:5,
        loop:true,
        autoplay:true,
        smartSpeed:700,
        autoplayTimeout:4000,
    });
    //Project End

    //Client Say start
    $("#client_say").owlCarousel({
        navigation : true,
        items:1,
        loop:true,
        margin:5,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
    });
    //Client Say start

    //Sponsors start
    $("#sponsors").owlCarousel({
        navigation : true,
        items:5,
        loop:true,
        margin:5,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
    });
    //Sponsors start

    //Clients start
    $("#client_images").owlCarousel({
        navigation : true,
        items:3,
        center:true,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
    });
    //Clients start

    var display=setInterval(function(){Time()},0);
    function Time()
    {
        var date=new Date();
        var time=date.toLocaleTimeString();
        document.getElementById("current_date").innerHTML=time;
    }


    ityped.init(document.querySelector("#ityped"), {
        /* showCursor: false, */
        strings: ['CONTENT', 'PARTNER', 'LIFE-STYLE'],
        typeSpeed: 55,
        startDelay: 200,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",

    });
    ityped.init(document.querySelector("#ityped1"), {
        /* showCursor: false, */
        strings: ['USUAL', 'AESTHETIC', 'ENORMOUS'],
        typeSpeed: 55,
        startDelay: 200,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",

    });
    ityped.init(document.querySelector("#client"), {
        /* showCursor: false, */
        strings: ['Choice Client', 'Happy Client', 'Regular Client'],
        typeSpeed: 55,
        startDelay: 200,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",

    });
});
