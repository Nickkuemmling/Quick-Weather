
const Header = (props) => {
    return(
        <div>
            <br></br>
            <h1>QuickWeather</h1>
            <h2>{props.location}</h2>
        </div>
    )
}

export default Header;