import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headersection'>
      <img src="./images/cytonn.png" width={200} alt='logo'/>
      <ul className='links'>
      <li><a href='#chart'>Graph</a></li>
      <li><a href='#statistics'>Statistics</a></li>
      </ul>
    </div>
  )
}

export default Header