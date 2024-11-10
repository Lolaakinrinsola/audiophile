import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Images } from '../assests/Images'
import Button from './Button'

const CategoryList = () => {
    const navigate=useNavigate()
    const products=[{name:'SPEAKERS',link:'/category/speakers',image:Images.speaker},{name:'EARPHONES',link:'/category/earphones',image:Images.earphones},{name:'HEADPHONES',link:'/category/headphones',image:Images.headphone},]
  return (
    <div className="px-[11%] grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] md:gap-[80px]  lg:gap-[30px]  pb-[50px] pt-[100px] md:py-[180px] overflow-auto">
        {products.map((val,index)=>(
        <div className="rounded-[8px] bg-grey grid gap-[11px] text-center justify-center  pt-[20px] md:py-[30px] relative w-full " key={index}>
            <div className="absolute top-[-40%] md:top-[-40%] m-auto w-full  ">
            <img src={val.image} alt={val.name} className=" grid   m-auto justify-center w-[80px] h-[104px] md:w-[125px] md:h-[160px] " />

            </div>
            <div className="grid gap-1 mt-[40px] md:mt-[60%]">
            <p className=" font-extrabold text-[12px] md:text-[18px] ">{val.name}</p>
            <Button title='SHOP' hover={true} className='w-fit text-[12px] pt-0' onClick={()=>navigate(`${val.link}`)}/>

            </div>
        </div>

        ))}
      </div>
  )
}

export default CategoryList