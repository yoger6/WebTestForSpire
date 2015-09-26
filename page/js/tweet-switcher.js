var widgetId="645843055879262208";
var textDestination = $("#Tweet");
var authorDestination = $("#Author");
var tweetBodies = [];
var currentTweet = 0;

$(function () {
var source= "http://cdn.syndication.twimg.com/widgets/timelines/"+widgetId+"?dnt=true&domain=unquietcode.com&lang=en&callback=?";
    $.getJSON(source, function (data) {
        var fullTweets = $(data.body).find("li.tweet");
        for (var i = 0; i < fullTweets.length; ++i) {
            var cur = $(fullTweets[i]);
            var tweet = {};
            tweet.id = cur.attr("data-tweet-id");
            tweet.text = $.trim(cur.find("p.e-entry-title").html());
            tweet.author = "@" + cur.find("span.p-nickname b").html();
            tweetBodies.push(tweet);
        }
        displayTweet(0);
    });
});

function displayTweet(index) {
    if (index < 0) {
        currentTweet = tweetBodies.length - 1;
    }
    else if (index > tweetBodies.length - 1) {
        currentTweet = 0;
    }
    else {
        currentTweet == index;
    }
    var tweetToBeLoaded = tweetBodies[currentTweet];

    textDestination.html(tweetToBeLoaded.text);
    authorDestination.html(tweetToBeLoaded.author);
}

$("#NextTweet").click(function (e) {
    e.preventDefault();
    currentTweet++;
    displayTweet(currentTweet);
});
$("#PreviousTweet").click(function (e) {
    e.preventDefault();
    currentTweet--;
    displayTweet(currentTweet);
})
