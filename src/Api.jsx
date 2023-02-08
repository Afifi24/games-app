// ? base URL
const base_url = "https://api.rawg.io/api/";

// Gitting the month

const getCurrentMonth = ()=>{
    const month = new Date().getMonth() + 1
    if(month<10){
        return `0${month}`
    }else{
        return month
    }
}
// gitting the day
const getCurrentDay = ()=>{
    const day = new Date().getDate()
    if(day<10){
        return  `0${day}`
    }else{
        return  day
    }
}

// gitting the year
const getCurrentYear = ()=>{
    const year = new Date().getFullYear()
}

// getting the date

const currentyear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay =  getCurrentDay();
const CurrentDate = `${currentMonth}-${currentDay}-${currentyear}`
const Lastyear = `${currentMonth}-${currentDay}-${currentyear - 1}`
const nextyear = `${currentMonth}-${currentDay}-${currentyear + 1}`

const popular_games = `games?key=16e23b716a67472a919001040f08791f&dates=${Lastyear},${CurrentDate}&ordering=-rating&page_size=10`;

export const PopularGamesURL = ()=>`${base_url}${popular_games}`