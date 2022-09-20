import styled from'styled-components'
import BackgroundImage from '../BackgroundImage'
import CityName from './components/CityName'
import Weather from './components/Weather'

const Layout = styled.div`
    display: flex;
    color: white;
    padding: 64px 96px;   
    justify-content: space-between;   //分两边

`
//render local weather, layout and city name
const LocalWeather =() =>(
    <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
        <Layout>
            <Weather />
            <CityName name="Melbourne"/>
        </Layout>
    </BackgroundImage>

)
export default LocalWeather