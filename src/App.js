import './App.css';
import Header from './components/Header';
// import {useState} from 'react';
// import axios from 'axios';
// import Weather from './components/Weather';

function App() {

  //   const [weatherData, setWeatherData] = useState(' ')
  //   const [location, setLocation] = useState('')

  //   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f34f5d327930221bb372de18e344644a`

  //   const callWeather = (event) => {
  //     if (event.key === 'Enter') {
  //     axios.get(URL)
  //     .then((res) => {
  //       console.log(res.data)
  //       setWeatherData(res.data)
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //     setLocation('')
  //   }
  // }






  return (
    <div className="App">

          <Header />
      {/* <main>
        <div className="wrapper">


          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={callWeather}
            placeholder='Enter Location'
            type="text"
          ></input>

          {weatherData.weather ? <p>The weather outside is: {weatherData.weather[0].main}</p> : null}

          <div className='weatherNumbers'>
            {weatherData.weather ? <p>{weatherData.main.feels_like}°C</p> : null}
            {weatherData.weather ? <p>{weatherData.main.humidity}%</p> : null}
            {weatherData.weather ? <p>{weatherData.wind.speed}km/h</p> : null}
          </div>



        </div>
      </main> */}
    </div>
  );
}
          // {/* <Weather main={weatherData.main.feels_like} /> */}
export default App;
