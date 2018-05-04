let responseBody = {};

$.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => {
    console.log(response);
    responseBody = response;
    })
.catch(error => {
    console.log(error);
});

$(document).ready(() => {
    $('#click-explanation').click(event => {   
        $('#explanation-text')
        .text(responseBody.explanation)
        .toggle();
    });
    $('#click-photo').click(event => {
        $('#photo')
        .attr('src', responseBody.url)
        .toggle();
    });
});



