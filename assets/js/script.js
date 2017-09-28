$(document).ready(function () {
    //Set Options
    var speed = 500; //fade speed
    var autoswitch =true; //auto slider options
    var autoswitch_speed = 4000; // auto slider speed

    // Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    // Show first slide
    $('.active').show();

    //next handler
    $('#next').on('click',nextSlide);

    //prev handler
    $('#prev').on('click', prevSlide);

    //auto slider
    if(autoswitch == true){
        setInterval(nextSlide, autoswitch_speed);
    }

    // Switch to next slide
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

     // Switch to next slide
     function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
     }
});



