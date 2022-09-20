import styled from 'styled-components'
import Temperature from '../../../Temperature/Temperature'
import WeatherIcon from '../../../WeatherIcon/WeatherIcon'


const Wrapper = styled.div`
    text-align: center;

    &{
        margin-left: 0.5rem;
    }
`
const Day = styled.div`
    margin-bottom: 1rem;
`
const StyledWeatherIcon = styled(WeatherIcon)`
    height: 70px;
    width: 70px;
`
const StyledTemperature = styled(Temperature)`
    font-size: 1.2rem;
`
const DailyWeather =({
    day,
    weather,
    temperature,
}) =>(
    <Wrapper>
        <Day>{day}</Day>
        <StyledWeatherIcon iconValue={weather.icon} description={weather.description}/>
        <div>
            <Temperature value={temperature}/>    
            {/* temperature is in-line element in span, use div to */}
        </div>
        
    </Wrapper>
    
)
export default DailyWeather