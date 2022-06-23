import './App.css';
import Header from './components/Header';
import {useState} from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import WeatherDescription from './components/WeatherDescription';

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
          setBackgroundImg(`clearSky${Math.floor(Math.random() * 5)}`)

        }else if (res.data.weather[0].description === "overcast clouds") {setBackgroundImg("overcast")

        }else if (res.data.weather[0].description === "scattered clouds") {setBackgroundImg("scattered")
          
        }else if (res.data.weather[0].description === "broken clouds") {setBackgroundImg("broken")
          
        }else if (res.data.weather[0].description === "few clouds") {setBackgroundImg("few")
          
        }else if (res.data.weather[0].description === "light rain" || "light intensity drizzle") {setBackgroundImg(`lightRain${Math.floor(Math.random() * 2)}`)

        }else if (res.data.weather[0].description === "moderate rain") {setBackgroundImg("moderateRain")

        }else if (res.data.weather[0].description === "heavy rain" || "heavy intensity rain") {setBackgroundImg("heavyRain")

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
    <body className={backgroundImg}>
      <main>

        <nav>
          <a className='hover-underline-animation' href="https://nickkuemmling.com/">Check out my portfolio</a>
        </nav>

        <div className='wrapper'>

          <Header />

          {weatherData.weather ? <WeatherDescription main={weatherData.weather[0].description} location={weatherData.name} /> : null}

          {backgroundImg === "startingBackground" ? <h2>Pick a city <br />then hit enter</h2> : null}

          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={CallWeather}
            placeholder='City Name'
            type="text"
          ></input>

          <div className='weatherNumbers'>
            {weatherData.weather ? <Weather
              feels={weatherData.main.feels_like}
              humid={weatherData.main.humidity}
              wind={weatherData.wind.speed} /> : null}
          </div>
        </div>

      </main>
        <footer>
          <a href="https://junocollege.com/">Built by Nick Kuemmling at Juno College 2022</a>
        </footer>
    </body>

  );
}

export default App;
