const WeatherDescription = (props) =>  {
    return(
        <>
            <h2>Welcome to {props.location}!</h2>
            <h3>- {props.main} -</h3>
        </>
    )
}


export default WeatherDescription;