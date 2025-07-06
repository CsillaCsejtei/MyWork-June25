function search(city) {
  const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";
  // First, get the latitude and longitude for the city
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  axios
    .get(geoUrl)
    .then(function (response) {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      // Call getWeather API when the button is clicked
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      return axios.get(weatherUrl);
    })
    .then(function (response) {
      const temp = response.data.main.temp;
      document.getElementById(
        "weatherResult"
      ).innerHTML = `Temperature: ${temp} °C`;
    });
}
document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  search(city);
});
