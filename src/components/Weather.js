
const Weather = (props) => {
    return(
        <div>
            <p>Today is {props.main}</p>
            <p>{props.feels}°C</p>
            <p>{props.humid}%</p>
            <p>{props.wind}km/h</p>
        </div>
    )
}

export default Weather;