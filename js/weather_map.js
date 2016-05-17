(function(){

$(document).ready(function() {
"use strict";

 // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 5,

        // This sets the center start point of the map before being dragged
        center: {
                lat: 29.425656,
                lng: -98.484984
            },
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
    });

    // function to add date to weather data box
    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
          yyyy = d.getFullYear(),
          mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
          dd = ('0' + d.getDate()).slice(-2),     // Add leading 0.

        time = mm + '/' + dd + '/' + yyyy;
        return time;
    }

    // listener to create draggable marker that registers end position
    marker.addListener("dragend", function(data) {

        // variable to store lat/long of marker
        var myPosition = {lat: data.latLng.lat(), lng: data.latLng.lng()};
        var weatherInfo = '';
        
        // ajax to request info from weather map place
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "7231b1576575e9f61aa70771f8cb8571",
            lat: myPosition.lat,
            lon: myPosition.lng,
            units: "imperial",
            cnt: 3
        }).done(function(data) {
            console.log(data);

            $("#forecast").html("");

            data.list.forEach(function(element, index){
                var weatherInfo = '';

                $("#city").html(data.city.name).css("font-weight", "bold");

                // this bit concatenates-ish forecast info into a 'set'
                weatherInfo += "<div class='col-md-4 position'>";
                weatherInfo += "<h4>" + convertTimestamp(element.dt) + "</h4>";
                weatherInfo += "<h3 class='bold'>" + Math.round(element.temp.max) + "&#8457" + "  /  " + Math.round(element.temp.min) + "&#8457" + "</h3>";
                weatherInfo += "<img src='http://openweathermap.org/img/w/" + element.weather[0].icon + ".png'>";
                weatherInfo += "<p>" + "<span class='bold'>" +element.weather[0].main + "</span>" + ": " + element.weather[0].description + "</p>";
                weatherInfo += "<p>" + "<span class='bold'>" + "Humidity: " + "</span>" + element.humidity + "%" + "</p>";
                weatherInfo += "<p>" + "<span class='bold'>" + "Wind Speed: " + "</span>" + element.speed + " mph" + "</p>";
                weatherInfo += "</div>";

                // takes the above and puts in into id-forecast box
            $("#forecast").append(weatherInfo);
            });
        });
    });
});
})();