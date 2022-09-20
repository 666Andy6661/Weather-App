import styled from 'styled-components'
import Temperature from '../../../Temperature'
import WeatherIcon from '../../../WeatherIcon'
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    & ~ &{
        margin-top: 0.5rem;
    }
`
const CityName = styled.div`
    width:100px;
    margin-right: 1rem;
`
const StyledWeatherIcon = styled(WeatherIcon)`
    height: 50px;
    width: 50px;
`
const StyledTemperature = styled(Temperature)`
    width: 3rem;
    
`
const CityWeather = ({
    name,
    temperature,
    weather,
}) =>(
    <Wrapper>
        <CityName>{name}</CityName>
        <StyledTemperature value={temperature}/>
        <StyledWeatherIcon iconValue={weather.icon} description={weather.description}/>
    </Wrapper>
)
export default CityWeather