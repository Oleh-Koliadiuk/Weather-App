import { getWeather } from "./api.js";
import { cities } from "./cities.js";
import { saveSelectedCity, getSelectedCity } from "./storage.js";

const cityButtons = document.querySelectorAll(".city-button");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const apparentTemperature = document.querySelector(".apparent-temperature");
const precipitation = document.querySelector(".precipitation");
const windSpeed = document.querySelector(".wind-speed");
const weatherDescription = document.querySelector(".weather-code");
const cityName = document.querySelector(".city-name");
const refreshButton = document.querySelector(".refresh-button");

let currentCity = cities[0];

const savedCityName = getSelectedCity();

const savedCityObj = cities.find((city) => city.name === savedCityName);

if (savedCityObj) {
  currentCity = savedCityObj;
}

for (const button of cityButtons) {
  button.classList.toggle("active", button.dataset.city === currentCity.name);
}

function getWeatherDescription(weatherCode) {
  if (weatherCode === 0) {
    return "Clear Sky";
  } else if (weatherCode >= 1 && weatherCode <= 3) {
    return "Cloudy";
  } else if (weatherCode === 45 || weatherCode === 48) {
    return "Fog";
  } else if (weatherCode >= 51 && weatherCode <= 57) {
    return "Drizzle";
  } else if (weatherCode >= 61 && weatherCode <= 67) {
    return "Rain";
  } else if (weatherCode >= 71 && weatherCode <= 77) {
    return "Snow";
  } else if (weatherCode >= 80 && weatherCode <= 82) {
    return "Rain Showers";
  } else if (weatherCode >= 85 && weatherCode <= 86) {
    return "Snow Showers";
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return "Thunderstorm";
  }
}

async function loadWeather(city) {
  const latitude = city.latitude;
  const longitude = city.longitude;

  const data = await getWeather(
    latitude,
    longitude,
    "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
  );

  temperature.textContent = `${data.current.temperature_2m} °C`;
  humidity.textContent = `${data.current.relative_humidity_2m} %`;
  apparentTemperature.textContent = `${data.current.apparent_temperature} °C`;
  precipitation.textContent = `${data.current.precipitation} mm`;
  windSpeed.textContent = `${data.current.wind_speed_10m} km/h`;

  const description = getWeatherDescription(data.current.weather_code);
  weatherDescription.textContent = description;

  cityName.textContent = city.name;
}

for (const button of cityButtons) {
  button.addEventListener("click", async () => {
    cityButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const result = cities.find((city) => {
      return city.name === button.dataset.city;
    });

    currentCity = result;
    saveSelectedCity(result.name);

    await loadWeather(currentCity);
  });
}

refreshButton.addEventListener("click", async () => {
  await loadWeather(currentCity);
});

await loadWeather(currentCity);
