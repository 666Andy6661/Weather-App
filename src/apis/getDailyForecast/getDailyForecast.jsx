import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getDailyForecast = (id) => OpenWeatherMap.get({
    path:'/forecast',
    params:{
    id,
    } 
})

export default getDailyForecast