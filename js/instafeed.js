$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'thefinancialfix',
        userId: '19754246027',
        limit: 3,
        resolution: 'standard_resolution',
        accessToken: '19754246027.1677ed0.b70debfcf10b49938244ee617792a5f3',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});