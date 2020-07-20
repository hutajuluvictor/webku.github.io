const sideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNav);

        const dropDown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDown);

        const Dropdown = document.querySelectorAll('.down-trigger');
        M.Dropdown.init(Dropdown);

        const dropDOwn = document.querySelectorAll('.drop-trigger');
        M.Dropdown.init(dropDOwn);

        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
            interval: 2000,
            height:500
        });
        var mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
        }
        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    //scrool daily
    if(wScroll > $('.content').offset().top -50 ) {
        $('.content .container').addClass('up');
    }

    if(wScroll > $('.contents').offset().top -50 ) {
        $('.contents .container').addClass('up');
    }

    if(wScroll > $('.content-list').offset().top -50 ) {
        $('.content-list .container').addClass('up');
    }

    if(wScroll > $('.contentlist').offset().top -50 ) {
        $('.contentlist').addClass('up');
    }

});

//about
$(window).on('load', function() {
    $('.about .left').addClass('ups');
    $('.about .right').addClass('ups');
    $('aside .righti').addClass('jin');
    $('.info .leftin').addClass('join');
    
});
