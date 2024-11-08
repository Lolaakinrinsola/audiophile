import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"
import { Images } from "../assests/Images"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}:any) => {
  const clocation=useLocation()
  const Wrapper = ({children}:any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  const name= clocation.pathname
  
  return (

    <Wrapper>
      {name==='/cart' ?
    children:
    <>
    <Navbar/>
    
    {children}
    <div className="mx-[11%] mt-[100px] mb-[200px] grid md:grid-cols-2 gap-[40px]">
        <div className="max-w-[445px] grid gap-[32px] h-fit my-auto">
            <p className="font-bold text-[40px] uppercase ">Bringing you the <span className="text-primary m-0">best
                </span> audio gear</p>

                <p className="text-black text-[15px] font-light">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
        </div>
        <img src={Images.audio} alt="audio" />
      </div>
    <Footer/>
    
    </>
    }
    </Wrapper>
  )
}

export default Layout