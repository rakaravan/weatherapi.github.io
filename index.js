let weather = {
    apiKey: "782a9b19949c309b4a0c7c0d59dcb855",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&appid="
            + this.apiKey 
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed); 
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + " km/h";
        document.querySelector(".temp").innerHTML = (temp - 273.15).toPrecision(3) + "°C";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", event => {
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("hazaribag");

// { 
//     "coord":{
//         "lon":85.35,
//         "lat":23.9833
//     },
//     "weather":
//     [
//         {
//             "id":803,
//             "main":"Clouds",
//             "description":"broken clouds",
//             "icon":"04n"
//         }
//     ],
//     "base":"stations",
//     "main":{
//         "temp":286.12,
//         "feels_like":284.67,
//         "temp_min":286.12,
//         "temp_max":286.12,
//         "pressure":1015,
//         "humidity":46,
//         "sea_level":1015,
//         "grnd_level":945
//     },
//     "visibility":10000,
//     "wind":{
//         "speed":1.11,
//         "deg":348,
//         "gust":1.19
//     },
//     "clouds":{
//         "all":52
//     },
//     "dt":1670508958,
//     "sys":{
//         "country":"IN",
//         "sunrise":1670460561,
//         "sunset":1670499097
//     },
//     "timezone":19800,
//     "id":1270164,
//     "name":"Hazaribagh",
//     "cod":200
// }