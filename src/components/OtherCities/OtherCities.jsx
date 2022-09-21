import Section from "../Section"
import CityWeather from "./components/CityWeather"
import { useEffect, useState } from "react"
import getWeathers from "../../apis/getWeathers"

//if want to get data from api, 
const OtherCities = () =>{

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getWeathers([2158177,2147714,2174003,2063523]).then((res) =>{
            setData(res.data)
            setLoading(false)
        })
    },[])

    if(loading) {
        return (<div>Loading...</div>)
    }

    // const [weathers, setWeathers] = useState([
    //     {id:'MELBOURNE',name:"Melbourne", temperature:"21", weather:{icon:'04d', description: 'Clouds'}},
    //     {id:'SYDNEY',name:"Sydney", temperature:"24", weather:{icon:'01n', description: 'Clear'}},
    //     {id:'PERTH',name:"Perth", temperature:"28", weather:{icon:'01d', description: 'Clouds'}},
        
    // ])
    return(
        <Section title="Other cities">
            {data.list.map(({id, name, main:{temp}, weather:[weather]})=>(
                <CityWeather key={id} name={name} temperature={temp} weather={weather}/>
            ))}
        </Section>
    )
}
export default OtherCities