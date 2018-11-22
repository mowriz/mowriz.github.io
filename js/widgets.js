var widgets = new Object({

    initDomReady: function () {

    },

    initLoad: function () {
        wi.initWidgets();
    },

    initWidgets: function () {
        var t = {"time": "21:33:45"};
        console.log(t.time);
        var mock = {"coord":{"lon":6.96,"lat":50.94},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":278.38,"pressure":1021,"humidity":65,"temp_min":277.15,"temp_max":279.15},"visibility":10000,"wind":{"speed":1.5,"deg":350},"clouds":{"all":0},"dt":1522956000,"sys":{"type":1,"id":4885,"message":0.0034,"country":"DE","sunrise":1522904263,"sunset":1522951954},"id":2886242,"name":"Cologne","cod":200};

        console.log(mock);
        console.log(mock.main.humidity);
        console.log(mock.main.temp);
        console.log(mock.main.pressure);
        console.log(mock.weather[0].main);
        console.log(mock.weather[0].icon);
        console.log(mock.weather[0].description);

        // https://openweathermap.org/weather-conditions
        // http://openweathermap.org/img/w/10d.png

        //day or night
        console.log(mock.sys.sunrise);
        console.log(mock.sys.sunset);

        console.log(mock.weather[0].description);
        $('.weather').addClass('weather--'+mock.weather[0].description.replace(' ',''));
        // clearsky // fewclouds // scatteredclouds // brokenclouds // showerrain // rain // snow // mist
    },

});

var wi = widgets;

$(document).on('ready', function () {
    wi.initDomReady();
});
$(window).on('resize', function () {

});
$(window).on('load', function () {
    wi.initLoad();
});