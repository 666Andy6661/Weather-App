import styled from 'styled-components'
import Temperature from '../../../Temperature'
import WeatherIcon from '../../../WeatherIcon'
const Button = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    font-size: 1rem;
    text-align: left;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* & ~ &{
        margin-top: 0.5rem;
    } */
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    &:hover{
        /* background: rgba(0,0,0,0.1) */
        border-bottom: 1px solid rgba(0,0,0,0.1);
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
    id,
    setCityId,
    name,
    temperature,
    weather,
}) =>(
    <Button onClick={()=>setCityId(id)}>
        <CityName>{name}</CityName>
        <StyledTemperature value={temperature}/>
        <StyledWeatherIcon iconValue={weather.icon} description={weather.description}/>
    </Button>
)
export default CityWeather