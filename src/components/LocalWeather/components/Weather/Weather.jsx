import Temperature from "../../../Temperature/Temperature"
import styled from 'styled-components'
import WeatherItem from './components/WeatherItem'

//render weather, layout of temperature, main weather, humidity and wind

const Wrapper = styled.div`
    text-align: center;

`
const StyledTemperature = styled(Temperature)`
    color: white;
    font-size: 5rem;

`

const VerticalDivider = styled.div`
    width: 2px;
    background-color: rgba(255,255,255,0.7);
`
const MainWeather = styled.div`
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin-top: 0.25rem;
    color: rgba(255,255,255,0.7);

`
const WindAndHumidity=styled.div`
    display: flex;
    color: rgba(255,255,255,0.7);
    margin-top: 3rem;
    justify-content: space-between;  //use flex-basis to assign the space between
`
const Weather = () =>(

    <Wrapper>
        <StyledTemperature value="11.84"/>  
        {/* 把classname一起传进去，这样会应用样式 */}
        <MainWeather>Rain</MainWeather>
        <WindAndHumidity>
            <WeatherItem title="HUMIDITY">83%</WeatherItem>
            <VerticalDivider/>
            <WeatherItem title="WIND">11.83 K/M</WeatherItem>
        </WindAndHumidity>
    </Wrapper>
)

export default Weather