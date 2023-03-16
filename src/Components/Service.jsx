import React from 'react'
import { useSelector } from 'react-redux'

const Service = () => {
  const data = useSelector((state) => {
     return state
  })
  return (
    <>
    <div className='service' style={{backgroundColor : data.toggleColor.backgroundColor, color : data.toggleColor.color}}>
    <h1>Our Service Will be available in future</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores? </p>
    </div>
    </>
  )
}

export default Service