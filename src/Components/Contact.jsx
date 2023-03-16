import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const data = useSelector((state) => {
      return state
  })
  return (
    <div className='contact' style={{backgroundColor : data.toggleColor.backgroundColor, color : data.toggleColor.color}}>
        <h1>You can visit here :- <a href='https://roshansah.com/'>roshansah.com</a></h1>
    </div>
    
  )
}

export default Contact