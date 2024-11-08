import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate=useNavigate()
  return (
    <div className='h-[100vh] grid justify-center m-auto '>
    <div className="grid justify-center h-fit m-auto">
  <button className="text-primary underline m-auto" onClick={() => navigate("/")}>
    Back
  </button>

  <div className="flex justify-center items-center">
    <h1 className="text-[50px] font-semibold text-center">404! Looks like you are lost</h1>
  </div>
    </div>
</div>

  )
}

export default Notfound