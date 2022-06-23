const Weather = (props) => {
    return(
        <div className="fadeIn">

            <div className="mainData">
                <p className="degreesC">{Math.round(props.feels)}°C</p>

                <p className="spacingLine">|</p>
                {/* <p>{props.humid}%</p> */}
                {props.humid  < 39 ? <p>Humidity - Dry</p> : null}
                {props.humid  > 40 && props.humid < 60 ? <p>Humidity - Comfortable</p> : null}
                {props.humid  > 60 ? <p>Humidity - High</p> : null}

                <p className="spacingLine">|</p>
                {/* <p>{props.wind}km/h</p> */}
                {props.wind  < 4 ? <p>Wind - Low</p> : null}
                {props.wind  > 4 && props.wind < 8 ? <p>Wind - Moderate</p> : null}
                {props.wind  > 8 ? <p>Wind - High</p> : null}
            </div>

        </div>
    )
}

export default Weather;