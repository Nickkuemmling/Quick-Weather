import './App.css';
import Header from './components/Header';
import {useState} from 'react';
import axios from 'axios';
import Weather from './components/Weather';

function App() {

    const [weatherData, setWeatherData] = useState({})
    const [location, setLocation] = useState('')

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f34f5d327930221bb372de18e344644a`

    // useEffect( () => {
    const callWeather = (event) => {
      if (event.key === 'Enter') {
      axios.get(URL)
      .then((res) => {
        console.log(res.data)
        setWeatherData(res.data)
      }).catch(error => {
        console.log(error)
      })
      setLocation('')
    }
  }
// }, []);





  return (
    <div className="App">

      <main>
        <div className="wrapper">
          
          <Header />

          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={callWeather}
            placeholder='Enter Location'
            type="text"
          ></input>

          <div className='weatherNumbers'>
            {weatherData.weather ? <Weather 
            main={weatherData.weather[0].main} 
            feels={weatherData.main.feels_like} 
            humid={weatherData.main.humidity} 
            wind={weatherData.wind.speed}/> : null}
          </div>

        </div>
      </main>
    </div>
  );
}
export default App;
