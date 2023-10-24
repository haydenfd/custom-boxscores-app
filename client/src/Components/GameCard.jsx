import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { nbaTeams } from '../Utilities/team_info'


export const GameCard = ({ key, home_team, away_team }) => {
    

  return (
    <Card className='w-[20%]' isPressable key={key}>
      <CardBody className='flex flex-row gap-2 justify-between flex-nowrap bg-green-400 p-2'>
        {/* <h1 className='font-semibold'>{home_team}</h1>
        <h1 className='font-semibold'>{away_team}</h1> */}
        <div className='flex-1 flex flex-col justify-center'>
            <img src= {`${nbaTeams[away_team].image}`} alt="" className='max-h-[75px]'/>
            <h2 className='text-lg font-semibold w-full text-center'> { away_team }</h2>
        </div>
   
        <div className='flex-1 flex flex-col justify-center'>
            <img src= {`${nbaTeams[home_team].image}`} alt="" className='max-h-[75px]'/>
            <h2 className='text-lg font-semibold w-full  text-center'> { home_team }</h2>
        </div>


      </CardBody>
    </Card>
  )
}
