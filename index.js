const temp = document.querySelector('#weather-temp');
const condition = document.querySelector('#weather-condition');
const icon = document.querySelector('#weather-icon');

async function start() {
  const weatherPromise = await fetch(
    'https://api.weatherapi.com/v1/current.json?q=14.682420719185082%2C121.12798023158746&key=0646a2235f34450f91e174616240410'
  );
  const weatherData = await weatherPromise.json();
  console.log(weatherData);
  console.log(weatherData.current.condition.text);
  console.log(`${weatherData.current.temp_c}°C`);

  const { temp_c, condition } = weatherData.current; // destructure from object

  temp.textContent = temp_c;
  condition.textContent = condition.text;
  icon.src = condition.icon;

}

start();

// reference: https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/realtime-weather
