function refreshWeather(response) {
  let currentTemperatureElement = document.querySelector(
    `#current-temperature-value`
  );
  let temperature = response.data.temperature.current;
  currentTemperatureElement.innerHTML = Math.round(
    response.data.temperature.current
  );
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
  currentCityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEngine);
