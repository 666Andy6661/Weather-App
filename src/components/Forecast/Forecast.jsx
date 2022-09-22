import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather/DailyWeather'
import { useEffect, useState } from 'react'
import getDailyForecast from '../../apis/getDailyForecast'
import toDailyForecast from '../../utils/toDailyForecast'
import {getDay} from 'date-fns'

const Layout = styled.div`
    display: flex;
    margin-top: 2rem;
`
const DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT']

const Forecast=({
    cityId,
})=>{
    // const [forecast, setForecast] = useState([
    //     {id:'MON',day:"Mon", temperature:"21", weather:{icon:'04d', description: 'Clouds'}},
    //     {id:'TUE',day:"TUE", temperature:"24", weather:{icon:'01n', description: 'Rain'}},
    //     {id:'WED',day:"WED", temperature:"30", weather:{icon:'01d', description: 'Clear'}},
    //     {id:'THU',day:"THU", temperature:"30", weather:{icon:'01d', description: 'Clear'}},
    // ])

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getDailyForecast(cityId).then((res)=> {
            setData(res.data)
            setLoading(false)
        })
    },[cityId])
    
    if(loading){
        return <div>Loading...</div>
    }
    
    const forecast = data.list.filter(({dt_txt})=>dt_txt.endsWith('00:00:00'))

    return(
    <Section title="Forecast">
        <Layout>
            {forecast.map(({dt, main:{temp}, weather:[weather] }) =>(
                <DailyWeather key={dt}
                 day={DAYS[getDay(new Date(dt*1000))]} 
                 temperature={temp} 
                 weather={weather}/>

            ))}
        
        </Layout>
    </Section>
    )
    
}
export default Forecast