var apod = {
    init: function() {
        var nasaKey = 'xYpVHthqInxK0wzGAEYgSpkoeIwonVdbpQ59dizB';
        var url = 'https://api.nasa.gov/planetary/apod?api_key=';

        $.ajax({
            url: url + nasaKey
        }).done(function(result){

            $('#apodTitle').text(result.title);

            $('#apodImg')
                .attr('src', result.url)
                .attr('alt', result.title);

            $('#apodCopyright').text('Copyright: '  + result.copyright);

            $('#apodDate').text('Date: '  + result.date);

            $('#apodDesc').text(result.explanation);

        }).fail(function(result){
            console.log(result);
        });
    }
};

apod.init();