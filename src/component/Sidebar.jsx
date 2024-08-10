import React from 'react'
import { useSelector } from 'react-redux'


function Sidebar() {
    const isMenuOpen= useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen)return null;
  return (
    <div className='p-2 m-2 shadow-lg w-32'>
    <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
    </ul>
        <h1 className='text-red-600 m-1 p-1 font-bold'>Subscription</h1>
    <ul>
        <li>Music</li>
        <li>Movie</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Discovery</li>
    </ul>
    <h1 className='text-red-600 m-1 p-1 font-bold'>Watch Later</h1>
    <ul>
        <li>Music</li>
        <li>Movie</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Discovery</li>
    </ul> 
    </div>
  )
}

export default Sidebar