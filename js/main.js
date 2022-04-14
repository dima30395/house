$(function() {
    $('.about__gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.video-player').click(function() {
        $('.search__video-gradient').toggleClass('active');
    })

    $('.burger__menu').click(function() {
        $('.nav__list').toggleClass('active');
        $('.burger__menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    })

});