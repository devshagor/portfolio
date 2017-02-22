$(document).ready(function() {
    var skl = true;
    $('.FunfactSec').appear();

    $('.FunfactSec').on('appear', function() {
        if (skl)
        {
            $('.funfacts').each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')},
                {
                    duration: 6000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 9999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    $('.singleSkill').appear();

    $('.singleSkill').on('appear', function() {
        $(".skill").each(function() {
            $(this).easyPieChart({
                barColor: '#fff',
                trackColor: '',
                scaleColor: '',
                lineWidth: 10,
                lineCap: 'square',
                size: 150,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        });
    });
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
        });
    });
    $('#Grid').themeWar();
    /*ClientReview slider*/
    $('.ReviewSecSlider').owlCarousel({
        items: 1,
        navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        navigation: true,
        autoPlay: false,
        loop: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
		responsive:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            }, 
			1000: {
                items: 1
            }
        }

    });

    /* $('.FunfactSec').parallax({imageSrc: 'images/bg2.jpg'}); */
    /*Typed Carosul start*/

    $(function() {
        $(".Typeing").typed({
            strings: ["shagor...", "Designer...", "Developer..."],
            typeSpeed: 80,
            loop: true,
            stringsElement: null,
            cursorChar: "|",
            backDelay: 1000
        });

});

    /*Typed Carosul end*/
    /*MobileMenu Start Here*/

    $('.scrolls a').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - (50)}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.MainMenu').find('.scrolls > a').each(function() {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function(i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.MainMenu li.scrolls')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }

    $(".mobileMenu").on('click', function() {
        $(".MainMenu > ul").slideToggle('slow');
        $(this).toggleClass('active');
    });
    /* MobileMenu End Here*/

    /* Main Menu Fixed on Top Start*/

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0)
        {
            $(".MenuBar").addClass('FixedMenu');
        }
        else
        {
            $(".MenuBar").removeClass('FixedMenu');
        }
        /************ Menu Active on Scroll **********************/
        Scroll();

    });

    /* Main Menu Fixed on Top End*/

    /*Back To Top Start*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $(".BackTo").fadeIn('slow');
        }
        else
        {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /*Back To Top End*/

    /*magnificPopup Section Start*/
    $('.lense').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*magnificPopup Section End*/

    //=======================================================
    // Google map
    //=======================================================
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 53.967015,
            lng: -1.079608,
            scrollwheel: false,
            zoom: 10,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });


        var image = '';
        map.addMarker({
            lat: 53.967015,
            lng: -1.079608,
            icon: 'images/MapIcon.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });
    }
    new WOW().init();

});

