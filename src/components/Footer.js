import React from 'react'

const Footer = () => {
  return (
    
       <div className="phy gap-24 border-b-2 mb-8">
        <div className='gap-44'>
          <p className='gap-52 justify-center'>invitation</p>
          <p>physician 1</p>
          <p>physician 2</p>
        </div>
        <div>
          <p>Email ID</p>
          <p>physician1@gmail.com</p>
          <p>physician2@gmail.com</p>
        </div>
        <div>
          <h5>status</h5>
          <button className='bg-amber-50 rounded-sm mb-3 '>pending</button>
          <br></br>
          <button className='bg-lime-400 rounded-sm '>Accepted</button>
        </div>
      </div>
    
    
  )
}

export default Footer
