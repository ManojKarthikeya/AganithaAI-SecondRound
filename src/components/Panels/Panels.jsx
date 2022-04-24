import React from 'react';
import Image from './../../assets/buddha.png'
import CountCards from '../CountCards/CountCards';
import './panels-styles.css'

function Panels() {
  return (
    <div className='Header'>
        <CountCards/>
        <img src={Image} alt="asdasd" className='header-image'/>
    </div>
  )
}

export default Panels