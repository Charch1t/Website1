const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector ('.temperature');
const description = document.querySelector ('.description');
const humidity = document.getElementById('humidity')
const windspeed = document.getElementById('Wind-speed')


async function checkWeather(city){
    const api_key ="9b00cd793a9076f9438ee82a98596b77";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch (`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        console.log("Error")
        return;

    }
    temperature.innerHTML = `${Math.round (weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/clouds.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
                weather_img.src = "/images/rain.png";
                break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Drizzle':
            weather_img.src = "/images/drizzle.png";
            break;
        
    }

    console.log(weather_data);    
}
searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});