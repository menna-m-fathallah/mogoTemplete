document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
$(document).ready(function () {
    $(window).on('scroll', function () {
        changeActive();
    })
    //lisenter on navbar 
    $("nav ul li a").on("click", function () {
        $("nav ul li a").removeClass("active");
        $("nav ul li a").addClass("text-white");
        $(this).removeClass("text-white");
        $(this).addClass("active");
    })
    function changeActive() {
        var pos = $(window).scrollTop();
        pos=pos+100;
        var sections = ["about", "service", "blog", "work", "contact"];
        if (pos > $('#' + sections[0]).offset().top) {
            $(".navy").addClass("bg");
        }
        else {
            $("nav ul li a").removeClass("active");
            $("nav ul li a").addClass("text-white");
            $(".navy").removeClass("bg")
        }
        sections.map(function (elem, i) {
            if (pos > $('#' + elem).offset().top) {
                $("nav ul li a").removeClass("active");
                $("nav ul li a").addClass("text-white");
                $("#" + elem + "link").removeClass("text-white");
                $("#" + elem + "link").addClass("active");
            }

        })
    }
    var closed=true;
    //lisenter on menu 
    $("#menu").on("click", function () {
       if(closed){
        $("#main").css("padding-top","280px");
        closed=false;
       }
      else{
        console.log("mennu")
        $("#main").css("padding-top","18vw");
        closed=true;
      }
    })

})