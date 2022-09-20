import Temperature from "../../../Temperature/Temperature"
import styled from 'styled-components'
import WeatherItem from './components/WeatherItem'
import { useState } from "react"

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
const Weather = ({
    temperature,
    mainWeather,
    humidity,
    wind,
}) =>(
    
    <Wrapper>
        <StyledTemperature value={temperature} />
        {/* 把classname一起传进去，这样会应用样式 */}
        <MainWeather>{mainWeather}</MainWeather>
        <WindAndHumidity>
            <WeatherItem title="HUMIDITY">{`${humidity}%`}</WeatherItem>
            <VerticalDivider />
            <WeatherItem title="WIND">{`${wind} K/M`}</WeatherItem>
        </WindAndHumidity>
    </Wrapper>
    
)
export default Weather