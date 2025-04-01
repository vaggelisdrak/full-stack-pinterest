import React from 'react'
import "./topBar.css"
import UserButton from '../userButton/userButton'
import Image from '../image/Image'

const TopBar = () => {
  return (
    <div className='topBar'>
        {/* SEARCH BAR */}
        <div className='search'>
            <Image path='/general/search.svg' alt='search'/>
            <input type='text' placeholder='Search...' className='Search'/>
        </div>
        {/* USER */}
        <UserButton />
    </div>

  )
}

export default TopBar