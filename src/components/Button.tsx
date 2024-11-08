import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Button = ({light,type,title,onClick,className, hover}:any) => {
  return (
    <button className={`${hover&&'!border-0 text-black hover:!text-primary !bg-none'} ${light?'text-white border-[1px] border-black  hover:text-black hover:bg-white bg-black':!light&&!hover&&'!text-white bg-primary hover:bg-lightPrimary rounded-sm'} py-[15px] px-[30px] rounded-sm ${className}`} onClick={onClick} type={type}>
        <div className="flex justify-between items-center">
        {title}
        {hover&&
    <IoIosArrowForward className='text-primary text-[20px]' />
        
        }

        </div>
    </button>
  )
}

export default Button