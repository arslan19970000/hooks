import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Logout = () => {
  return (
    <div className='bg-amber-400 flex p-4  mt-16 w-full'>
          <nav className='space-x-48'>
                <Link className='bg-green-700' to="Goto ">goto</Link>
                <Link className='bg-lime-200' to="Notgo"> Notgo</Link>
            </nav>
            <Outlet/>
    </div>
  )
}

export default Logout