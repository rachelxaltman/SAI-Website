/*
Recieves Mu Psi History
 */
$(document).ready(function(){
    $.getJSON("peopleFiles.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                var div = document.createElement('div');
                $("#people").append("<h9>" + value.history + "</h9>" +"<br>");
                $("#people").append("<p5>" + value.bio + "</p5>" );
            });
        });
    });
});

/*
Founders images, names and bio from json
 */
$(document).ready(function(){
    $.getJSON("founderFile.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#founderrs").append("<img class = 'found' src='" + value.image + "'></img>");
                $("#founderrs").append("<h8>" + value.full_name + "</h8>");
                $("#founderrs").append("<p>" + value.bio + "</p>");
            });
        });
    });
});

/*
    Received picture on flickr of the founders
 */
$(document).ready(function(){
    var flickrApiUrl= "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cf50d1efb7e8bbb2711750e0db9fee01&user_id=144134032%40N03&tags=csai19&format=json&nojsoncallback=1";
    $.getJSON(flickrApiUrl, function(data) {
        var html = "";
        $.each(data.photos.photo, function (i, result) {
            var src = "https://farm" + result.farm + ".static.flickr.com/" + result.server +
                "/" + result.id + "_" + result.secret + "_b.jpg";
            $("#Histt").attr("src", src);
        });
    });
});
