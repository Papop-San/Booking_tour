import React from 'react'
import { Outlet } from 'react-router-dom'


function layout() {
  return (
    <div>
        <header/>
        <Outlet/>
    </div>
  )
}

export default layout