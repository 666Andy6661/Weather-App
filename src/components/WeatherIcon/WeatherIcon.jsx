const WeatherIcon = ({iconValue, description, className}) =>(
    <img className={className} alt={description} src= {`http://openweathermap.org/img/wn/${iconValue}@2x.png`}/>
)
export default WeatherIcon