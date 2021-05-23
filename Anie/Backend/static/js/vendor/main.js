(function ($) {
    "use strict";


    $(document).ready(function () {

        
        
        var checkB = $("#checkB");
        var checkM = $("#checkM");
        var form_hide = $('.form_hide');
        var form_mpesa = $('.form_mpesa');
        form_hide.hide();
        form_mpesa.hide();
        $("#Mcard").click(function () {
            if (checkM.prop("checked", true)) {
                checkM.attr("checked", "checked");
                checkB.removeAttr("checked", "checked");
                form_hide.show();
                form_mpesa.hide();
            }

        });
        $("#mPesa").click(function () {
            if (checkB.prop("checked", true)) {
                checkB.attr("checked", "checked");
                checkM.removeAttr("checked", "checked");
                form_hide.hide();
                form_mpesa.show();
            }

        });

        $('#payment').click(function () {
            $('#Payment-content').removeClass('form-inactive');
            $('#Payment-content').addClass("form-active");
            $('#payment').addClass("active");
            $('#personal').removeClass("active");
            $('#member').removeClass("active");
            $('#Personnal').addClass("form-inactive");
            $('#membership').addClass("form-inactive");


        });
        $('#finish').click(function () {
            $('#Payment-content').removeClass('form-inactive');
            $('#Payment-content').addClass("form-active");
            $('#payment').addClass("active");
            $('#personal').removeClass("active");
            $('#member').removeClass("active");
            $('#Personnal').addClass("form-inactive");
            $('#membership').addClass("form-inactive");


        });

        $('#personal').click(function () {
            $('#Personnal').removeClass('form-inactive');
            $('#Payment-content').addClass("form-inactive");
            $('#Personnal').addClass("form-active");
            $('#Personnal').fadeIn(2000);
            $('#membership').addClass("form-inactive");
            $('#personal').addClass("active");
            $('#payment').removeClass("active");
            $('#member').removeClass("active");


        });
         $('#return').click(function () {
            $('#Personnal').removeClass('form-inactive');
            $('#Payment-content').addClass("form-inactive");
            $('#Personnal').addClass("form-active");
            $('#Personnal').fadeIn(2000);
            $('#membership').addClass("form-inactive");
            $('#personal').addClass("active");
            $('#payment').removeClass("active");
            $('#member').removeClass("active");


        });
        $('#member').click(function () {
            $('#membership').removeClass('form-inactive');
            $('#Payment-content').addClass("form-inactive");
            $('#Personnal').addClass("form-inactive");
            $('#membership').addClass("form-active");
            $('#member').addClass("active");
            $('#payment').removeClass("active");
            $('#personal').removeClass("active");


        });
        $('#P-Cont').click(function () {
            $('#membership').removeClass('form-inactive');
            $('#Payment-content').addClass("form-inactive");
            $('#Personnal').addClass("form-inactive");
            $('#membership').addClass("form-active");
            $('#member').addClass("active");
            $('#member').fadeTo();
            $('#payment').removeClass("active");
            $('#personal').removeClass("active");


        });
        $('#back').click(function () {
            $('#membership').removeClass('form-inactive');
            $('#Payment-content').addClass("form-inactive");
            $('#Personnal').addClass("form-inactive");
            $('#membership').addClass("form-active");
            $('#member').addClass("active");
            $('#member').fadeTo();
            $('#payment').removeClass("active");
            $('#personal').removeClass("active");


        });


        // review-active
        $('.slider_active').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplaySpeed: 800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                767: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                992: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 1,
                    nav: false
                },
                1500: {
                    items: 1
                }
            }
        });
        // review-active
        $('.slider_active_info').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplaySpeed: 800,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                767: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                992: {
                    items: 1,
                    nav: false
                },
                1200: {
                    items: 3,
                    nav: false
                },
                1500: {
                    items: 3
                }
            }
        });




    });

})(jQuery);
