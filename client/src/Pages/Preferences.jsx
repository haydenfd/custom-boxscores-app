import React from 'react'
import { PreferenceForm } from '../Components/PreferenceForm'

export const Preferences = () => {
  return (
    <>
        <h1 className='page-title'>Your Preferences</h1>
        <p className='text-lg mt-10 w-[80%] mx-auto text-center underline underline-offset-2 font-normal'>Choose what stats you see in your box scores!</p>

        <div className='w-1/2 mx-auto border-4 p-2 bg-white rounded-md mt-14'>
          <PreferenceForm/>
        </div>
    </>
  )
}
