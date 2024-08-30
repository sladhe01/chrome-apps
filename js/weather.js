const onGeoSuccess = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "4ee076b1c9fd6eb756ccee2a5b5fcac8";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weatherData = await fetch(url).then((response) => response.json());
  const region = document.querySelector("#weather span:first-child");
  const weather = document.querySelector("#weather span:last-child");
  region.innerText = weatherData.name;
  weather.innerText = `${weatherData.weather[0].main} / ${weatherData.main.temp}℃`;
};

const onGeoError = () => {
  console.log("hi");
  alert("Can't find your location.");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
