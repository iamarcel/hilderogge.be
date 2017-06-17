$(document).foundation();

$('.photo-gallery').photosetGrid({
    gutter: '16px',
    rel: 'hilde-fotos',
    highresLinks: true,

    onComplete: function(){
        $('.photo-gallery').attr('style', '');
        $('.photo-gallery a').colorbox({
            photo: true,
            scalePhotos: true,
            maxHeight:'90%',
            maxWidth:'90%'
        });
    }
});
