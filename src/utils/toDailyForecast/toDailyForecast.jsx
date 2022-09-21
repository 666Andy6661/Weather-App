import {eachDayOfInterval, addDays} from 'date-fns'

const toDailyForecast = (forecast, cnt=5) =>{
    const today = new Date()
    const days= eachDayOfInterval({
        start: today,
        end: addDays(today, cnt)
    })
    const daysTimestamp=days.map((day)=> day.getTime())
    return forecast.filter(({dt})=>daysTimestamp.includes(dt*1000))
}

export default toDailyForecast