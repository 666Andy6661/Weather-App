import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather/DailyWeather'

const Layout = styled.div`
    display: flex;
    margin-top: 2rem;
`
const Forecast=()=>(
    <Section title="Forecast">
        <Layout>
        <DailyWeather day="Mon" name="Melbourne" temperature="21" weather={{icon:'04d', description: 'Clouds'}} />
        <DailyWeather day="TUE" name="Sydney" temperature="24" weather={{icon:'01n', description: 'Rain'}} />
        <DailyWeather day="WED" name="Perth" temperature="30" weather={{icon:'01d', description: 'Clear'}} />
        <DailyWeather day="THU" name="Perth" temperature="30" weather={{icon:'01d', description: 'Clear'}} />
        </Layout>
        
    </Section>
)
export default Forecast