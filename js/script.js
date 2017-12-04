var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var actualQuote, author;

function getQuote() {
    console.log('clicked');
    $.ajax({
        type: "POST",
        headers: {
            "X-Mashape-Key": "l1rpt5qRfHmsh5oVMWvfi42i8jnNp1O56Xnjsn4ecofT9iYI4Z",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
        success: function(result) {
            json = JSON.parse(result);
            var color = Math.floor(Math.random() * colors.length);
            $('.quote').html(json.quote);
            actualQuote = json.quote;
            $('.author').html(json.author);
            author = json.author;
            $("html body").css("background-color", colors[color]);
        },
        error: function(e) {
            console.log(e);
        }
    });
}

$(document).ready(function() {
    getQuote();
    $('#next').on('click', getQuote);
    $('#twitter-button').on('click', function() {
        $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + actualQuote + "-By " + author)
    });
});