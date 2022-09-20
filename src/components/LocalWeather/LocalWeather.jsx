import { useState } from 'react'
import styled from'styled-components'
import BackgroundImage from '../BackgroundImage'
import CityName from './components/CityName'
import Weather from './components/Weather'
import axios from 'axios'
import { useEffect } from 'react'

const Layout = styled.div`
    display: flex;
    color: white;
    padding: 64px 96px;   
    justify-content: space-between;   //分两边

`

const getWeather = (id)=>axios.get('https://api.openweathermap.org/data/2.5/weather',{
    params:{
        id,
        units:'metric',
        appid:'2466213f21b4b723d341e00a430a7673',

    }
})
//render local weather, layout and city name
const LocalWeather =() =>{
    useEffect(() => {
        getWeather('2158177').then(({data}) => {
            setCityName(data.name)
            setTemperature(data.main.temp)
            setMainWeather(data.weather[0].main)
            setHumidity(data.main.humidity)
            setWind(data.wind.speed)

        })
    }, [])
    const[cityName, setCityName] = useState()
    const [temperature, setTemperature] = useState()
    const [mainWeather, setMainWeather] = useState()
    const [humidity, setHumidity] = useState()
    const [wind, setWind] = useState()
    return(
        <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
            <Layout>
                <Weather 
                temperature={temperature}
                mainWeather={mainWeather}
                humidity={humidity}
                wind={wind}
                />
                <CityName name={cityName}/>
            </Layout>
        </BackgroundImage>
    )
}
export default LocalWeather