function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector(
    `#current-temperature-value`
  );
  let currentCityElement = document.querySelector(`#current-city`);
  let temperature = response.data.temperature.current;
  let weatherDescription = document.querySelector(`#weather-description`);
  let humidityElement = document.querySelector(`#humidity`);
  let windSpeedElement = document.querySelector(`#wind`);
  let currentDateElement = document.querySelector(`#current-date`);
  let date = new Date(response.data.time * 1000);
  console.log(response.data);

  currentDateElement.innerHTML = `${date.getDay()} ${date.getHours() ${date.getMinutes}}`
  currentCityElement.innerHTML = response.data.city;
  weatherDescription.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  currentTemperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = `083bfotb109a4cdefa3925a78a10a2f3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function searchEngine(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCityElement = document.querySelector("#current-city");

  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEngine);

searchCity("Johannesburg");
