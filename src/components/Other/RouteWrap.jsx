import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

function RouteWrap() {
  return (
    <>
    <NavBar/>
    <Outlet>
      
    </Outlet>
    </>
  )
}

export default RouteWrap