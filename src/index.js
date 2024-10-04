function searchEngine(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchEngine);
