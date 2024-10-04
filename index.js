// weather
const temp = document.querySelector('#weather-temp');
const weather_condition = document.querySelector('#weather-condition');
const icon = document.querySelector('#weather-icon');

// location
const location_name = document.querySelector('#location-name');
const location_region = document.querySelector('#location-region');
const location_country = document.querySelector('#location-country');

async function start() {
  const weatherPromise = await fetch(
    'https://api.weatherapi.com/v1/current.json?q=14.682413578492366%2C121.12798895707499&key=0646a2235f34450f91e174616240410'
  );
  const weatherData = await weatherPromise.json();
  console.log(weatherData);
  console.log(weatherData.current.condition.text);
  console.log(`${weatherData.current.temp_c}°C`);

  // temp.textContent = weatherData.current.temp_c;
  // weather_condition.textContent = `${weatherData.current.condition.text}`;
  // icon.src = `${weatherData.current.condition.icon}`;

  // WEATHER
  const { temp_c, condition } = weatherData.current;

  temp.textContent = temp_c;
  weather_condition.textContent = condition.text;
  icon.src = condition.icon;

  // LOCATION
  const { name, region, country } = weatherData.location;
  console.log(name);
  console.log(region);
  console.log(country);

  location_name.textContent = name;
  location_region.textContent = region;
  location_country.textContent = country;
}

start();

// reference: https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/realtime-weather