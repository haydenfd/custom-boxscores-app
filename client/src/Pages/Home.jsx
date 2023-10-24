import React, { useState, useEffect } from 'react'
import { SERVER_ENDPOINTS } from '../api'
import { GameCard } from '../Components/GameCard'

export const Home = () => {

  const [gameData, setGameData] = useState([])

  const fetchTodayGames = async () => {

    await fetch(SERVER_ENDPOINTS.TODAY_GAMES).then((res) => res.json()).then(data => {
      console.log(data)
      setGameData(data)
    }) 
  }


  useEffect(() => {

    fetchTodayGames()

  }, [])

  return (
    <>
      <h1 className='page-title'>
        Today's games
      </h1>

      <div className='flex flex-row flex-wrap w-[85%] items-center justify-center mt-10 gap-16 mx-auto'>
        {
          gameData.length > 0 && gameData.map((game) => {
            return (
              // <div key={game.ID} className='p-2 border-2 border-black flex flex-row gap-2'>
              //   <h1>{game.HOME_TEAM}</h1>
              //   <h1>{game.VISITOR_TEAM}</h1>
              // </div>
              <GameCard key={game.ID} home_team={game.HOME_TEAM} away_team={game.VISITOR_TEAM} status_id={game.STATUS_ID} status_text={game.STATUS_TEXT}/>
          )
          })
        }
      </div>
    </>
  )
}

