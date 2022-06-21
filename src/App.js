import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './components/Weather';

function App() {

    const [weatherData, setWeatherData] = useState({})
    const [location, setLocation] = useState('')
    const [backgroundImg, setBackgroundImg] = useState("startingBackground")

//API CALL

    const CallWeather = (event) => {

      if (event.key === 'Enter') {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f34f5d327930221bb372de18e344644a`)
      .then((res) => {
        console.log(res.data)
        setWeatherData(res.data)

//CHANGING BACKGROUND

        if (res.data.weather[0].description === "clear sky") {
          setBackgroundImg("clearSky")

        }else if (res.data.weather[0].description === "overcast clouds") {setBackgroundImg("overcast")

        }else if (res.data.weather[0].description === "scattered clouds") {setBackgroundImg("scattered")
          
        }else if (res.data.weather[0].description === "broken clouds") {setBackgroundImg("broken")
          
        }else if (res.data.weather[0].description === "few clouds") {setBackgroundImg("few")
          
        }else if (res.data.weather[0].description === "light rain" || res.data.weather[0].description === "light intensity drizzle") {setBackgroundImg("lightRain")

        }else if (res.data.weather[0].description === "moderate rain") {setBackgroundImg("moderateRain")

        }else if (res.data.weather[0].description === "heavy rain") {setBackgroundImg("heavyRain")

        }else if (res.data.weather[0].description === "thunderstorm") {setBackgroundImg("thunderstorm")

      }else if (res.data.weather[0].description === "mist" || res.data.weather[0].description === "haze") {setBackgroundImg("mist")}

//-----------------------------------------

// ERROR CATCH AND DISPLAY WEATHER INFO
      }).catch(error => {
        console.log(error)
        alert("City does not exist.")
      })
      setLocation('')
    }
  }

  return (

        <div className={backgroundImg}>

          <Header location={weatherData.name} />
          
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={CallWeather}
            placeholder='Pick a City'
            type="text"
          ></input>

          <p className='formText'>(then hit enter)</p>

          <div className='weatherNumbers'>
            {weatherData.weather ? <Weather
              main={weatherData.weather[0].description}
              feels={weatherData.main.feels_like}
              humid={weatherData.main.humidity}
              wind={weatherData.wind.speed} /> : null}
          </div>
</div>

  );
}

export default App;
