import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { darkColor, lightColor } from './redux/action'

const Navbar = () => {

    const dispatch = useDispatch()

  const data = useSelector((state) => {
       return state
  })
  console.log(data.toggleColor)
  return (
   <>
    <div className='navbar' style={{backgroundColor : data.toggleColor.backgroundColor , color : data.toggleColor.color}}>
        <h2> I have changed theme to {data.toggleColor.backgroundColor === "white" ? "Light" : "Dark"} </h2>
        <p> Geekster </p>
        <div className='menu'>
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/service"> Service </Link>
        </div>
        <button onClick={() => {
            data.toggleColor.backgroundColor === "white" ? dispatch(darkColor()) : dispatch(lightColor())
        }}> Toogle Theme to {data.toggleColor.backgroundColor === "white" ? "Dark" : "Light"}</button>
    </div>
   </>
  )
}

export default Navbar