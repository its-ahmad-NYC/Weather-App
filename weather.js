const apiKey = "b752870185c65c6494ed1c1114986c4a";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(Url + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = (Math.round(data.main.temp) + "°c")
    document.querySelector(".wind").innerHTML = (data.wind.speed+ " Km/h")
    document.querySelector(".humidity").innerHTML = (data.main.humidity + "%")

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        WeatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "images/rain.png"
    }
    document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

