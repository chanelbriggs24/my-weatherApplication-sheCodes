// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let citySearch = prompt("Enter a city").toLowerCase();
// When trying to dynamically access the values of properties within an object you can
// use the square bracket syntax by simply calling the object name and in the square brackets
// defining the name of the property using a string --> weather["oslo"] or weather[citySearch]. This is especially
// helpful when the property name contains specical characters and is a string.

//Feature 1
// let daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let date = new Date();
// let day = daysOfWeek[date.getDay()];
// console.log(day);

// let hour = date.getHours();
// let minutes = date.getMinutes();

//

function showDate(date) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = daysOfWeek[date.getDay()];
  //   date.preventDefault();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = ` 0${hour}`;
  }

  return ` ${day} ${hour}:${minutes},`;
}

function weatherAPI() {
  let cityInput = document.querySelector("#city");
  let cityName = cityInput.value;
  let apiKey = "abf74f3d08ac0ba0527t801bd8o47a65";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=imperial`;

  function displayTemp(response) {
    let cityTemp = Math.round(response.data.temperature.current);
    let tempDisplay = document.querySelector("#tempVal");
    tempDisplay.innerHTML = cityTemp;
  }
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemp);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", weatherAPI);

function showCity(event) {
  event.preventDefault();
  let userInput = document.querySelector("#city");
  let header = document.querySelector("#city-title");
  header.innerHTML = `${userInput.value}`;
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", showCity);

let time = document.querySelector("#time");
let currentDate = new Date();
time.innerHTML = showDate(currentDate);

// if (weather[citySearch] !== undefined) {
//   let tempC = Math.round(weather[citySearch].temp);
//   let tempF = (tempC * 9) / 5 + 32;
//   let humidity = weather[citySearch].humidity;

//   alert(
//     `It is currently ${tempC} \u00B0 C (${tempF} \u00B0 F) in ${citySearch} with a humidity of ${humidity}%. `
//   );
// } else {
//   alert(
//     `Sorry, we don't know the weather for ${citySearch} , try going to https://www.google.com/search?q=weather+${citySearch}`
//   );
// }
