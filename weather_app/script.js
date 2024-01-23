const apiKey = "0c3631aa33f817e24f91b1ae849c46ac"; // need your own API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherConditionImg = document.querySelector(".weather-icon");
const weatherArea = document.querySelector(".weather");
const errorArea = document.querySelector(".error");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

async function checkWeather(find) {
  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${find}`);
    if (response.status === 404) {
      render();
    } else {
      render(await response.json());
    }
  } catch (error) {
    render();
  }
}

function render(data = null) {
  if (data == null) {
    errorArea.style.display = "block";
    weatherArea.style.display = "none";
  } else {
    errorArea.style.display = "none";
    weatherArea.style.display = "block";
    humidity.innerHTML = data.main.humidity + "%";
    city.innerHTML = data.name;
    wind.innerHTML = data.wind.speed + " km/h";
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    weatherConditionImg.src = getWeatherConditionImg(data.weather[0].main);
  }
}

function getWeatherConditionImg(condition) {
  if (condition === "Clouds") {
    return "./images/clouds.png";
  } else if (condition === "Clear") {
    return "./images/clear.png";
  } else if (condition === "Rain") {
    return "./images/rain.png";
  } else if (condition === "Drizzle") {
    return "./images/drizzle.png";
  } else if (condition === "Mist") {
    return "./images/mist.png";
  } else if (condition === "Snow") {
    return "./images/snow.png";
  } else {
    return "./images/clouds.png";
  }
}
