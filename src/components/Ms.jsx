import React from 'react'
import '../Styles/MS.css'
import msimg from '../assets/MS_Startups_Celebration_Badge_Dark.png'
// import msimg from '../assets/MS_Startups_Celebration_Badge_Light.png'
const Ms = () => {
  return (
    <div className='MS_container'>
        <img src={msimg} alt="Microsoft_IMG" className='MSimg'/>
    </div>
  )
}

export default Ms