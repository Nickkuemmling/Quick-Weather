import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const [weatherData, getWeatherData] = useState('')
    const [location, setLocation] = useState('')

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f34f5d327930221bb372de18e344644a`

    const callWeather = () => {
      axios.get(URL)
      .then(res => {
        console.log(res.data.main)
        getWeatherData(res.data.main.feels_like)
      }).catch(error => {
        console.log(error)
      })
    }

  // useEffect( () => {



  // }, []);



  return (
    <div className="App">
      <Header />
      <Form />
      <button onClick={callWeather}>show api</button>
      <p>{weatherData}</p>
    </div>
  );
}

export default App;
