var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


function fadeAway() {
    $("html body").animate({
        "background-color": colors[color]
    }, 1500, function() {
        
    });
}

function getQuote() {
    $.ajax({
        type: "POST",
        headers: {
            "X-Mashape-Key": "l1rpt5qRfHmsh5oVMWvfi42i8jnNp1O56Xnjsn4ecofT9iYI4Z",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        },
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
        success: function(result) {
            var color = Math.floor(Math.random() * colors.length);
            $('.quote').text(result.quote);
            $('.author').text(result.author);
            $("html body").animate({
                "background-color": colors[color]
            }, 1500);
            console.log(result);
        },
        error: function(e) {
            console.log(e);
        }
    });
}

$(document).ready(function() {
    getQuote();
});