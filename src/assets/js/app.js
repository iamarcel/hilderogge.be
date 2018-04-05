import $ from 'jquery';
import whatInput from 'what-input';
import Foundation from 'foundation-sites';
import '@fancyapps/fancybox';
import './jquery.justified.min.js';

$(document).foundation();

$('.photo-gallery-destination').empty().justifiedImages({
    images: document
        .getElementsByClassName('photo-gallery')[0]
        .getElementsByTagName('img'),
    getSize: (photo) => ({
        width: photo.naturalWidth,
        height: photo.naturalHeight
    }),
    thumbnailPath: (photo, width, height) => photo.src,
//     template: (photo) => `<a href="${photo.src}" data-fancybox="gallery" style="display: block; width: ${photo.displayWidth}; height: ${photo.displayHeight}">
// <img src="${photo.src}" style="width: ${photo.displayWidth}px; height=${photo.displayHeight}px; margin-right: ${photo.marginRight}px">
// </a>`
});

// $('.photo-gallery').photosetGrid({
//     gutter: '16px',
//     rel: 'hilde-fotos',
//     highresLinks: true,

//     onComplete: function(){
//         $('.photo-gallery').attr('style', '');
//         $('.photo-gallery a').colorbox({
//             photo: true,
//             scalePhotos: true,
//             maxHeight:'60%',
//             maxWidth:'20%'
//         });
//     }
// });
