import Section from "../Section"
import CityWeather from "./components/CityWeather"
import { useState } from "react"
const OtherCities = () =>{
    const [weathers, setWeathers] = useState([
        {id:'MELBOURNE',name:"Melbourne", temperature:"21", weather:{icon:'04d', description: 'Clouds'}},
        {id:'SYDNEY',name:"Sydney", temperature:"24", weather:{icon:'01n', description: 'Clear'}},
        {id:'PERTH',name:"Perth", temperature:"28", weather:{icon:'01d', description: 'Clouds'}},
        
    ])
    return(
        <Section title="Other cities">
            {weathers.map(({id, name, temperature, weather})=>(
                <CityWeather key={id} name={name} temperature={temperature} weather={weather}/>
            )
            
            )}
        </Section>
    )
}
export default OtherCities