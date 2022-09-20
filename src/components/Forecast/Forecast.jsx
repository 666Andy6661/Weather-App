import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather/DailyWeather'
import { useState } from 'react'

const Layout = styled.div`
    display: flex;
    margin-top: 2rem;
`


const Forecast=()=>{

    const [forecast, setForecast] = useState([
        {id:'MON',day:"Mon", temperature:"21", weather:{icon:'04d', description: 'Clouds'}},
        {id:'TUE',day:"TUE", temperature:"24", weather:{icon:'01n', description: 'Rain'}},
        {id:'WED',day:"WED", temperature:"30", weather:{icon:'01d', description: 'Clear'}},
        {id:'THU',day:"THU", temperature:"30", weather:{icon:'01d', description: 'Clear'}},
    ])

    return(
    <Section title="Forecast">
        <Layout>
            {forecast.map(({id, day,temperature,weather}) =>(
                <DailyWeather key={id} day={day} temperature={temperature} weather={weather}/>

            ))}
        
        </Layout>
    </Section>
    )
    
}
export default Forecast