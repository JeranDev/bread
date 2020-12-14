//Base URL
const base_url = 'https://api.rawg.io/api/'

//Getting the Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

//Getting the Day
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

//Current month/day/year
const currentMonth = getCurrentMonth()
const currentYear = new Date().getFullYear()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${currentDate}&odering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`
//Game Details
export const gamesDetailsURL = game_id => `${base_url}games/${game_id}`
//Game Screenshots
export const gamesScreenshotURL = game_id =>
  `${base_url}games/${game_id}/screenshots`
//Searched Game
export const searchGameURL = game_name =>
  `${base_url}games?search=${game_name}&ordering=-metacritic&page_size=9`
