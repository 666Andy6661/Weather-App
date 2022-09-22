import { useState } from 'react'
import styled from'styled-components'
import BackgroundImage from '../BackgroundImage'
import CityName from './components/CityName'
import Weather from './components/Weather'
import { useEffect } from 'react'
import getWeather from '../../apis/getWeather'

const Layout = styled.div`
    display: flex;
    color: white;
    padding: 64px 96px;   
    justify-content: space-between;   //分两边

`


//render local weather, layout and city name
const LocalWeather =({
    cityId,
}) =>{
    const[cityName, setCityName] = useState()
    const [temperature, setTemperature] = useState()
    const [mainWeather, setMainWeather] = useState()
    const [humidity, setHumidity] = useState()
    const [wind, setWind] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getWeather(cityId).then(({data}) => {
            setCityName(data.name)
            setTemperature(data.main.temp)
            setMainWeather(data.weather[0].main)
            setHumidity(data.main.humidity)
            setWind(data.wind.speed)
            setLoading(false)

        })
    }, [cityId])

    if(loading){
        return <div>Loading...</div>
    }
    
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