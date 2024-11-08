import { Images } from "../assests/Images";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import CartDropDown from "./CartDropDown";
import useStore from "../Utils/Store";
import Backdrop from "./Backdrop";
import CategoryList from "./CategoryList";
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openNav, setopenNav] = useState(false)
    const navigate=useNavigate()
    const location=useLocation()
    const name= location.pathname; 

    function toggleNav() {
      setopenNav(!openNav)
    }
    
  const navlinks = [
    { name: "home", link: "/" },
    { name: "headphones", link: "/category/headphones" },
    { name: "speakers", link: "/category/speakers" },
    { name: "earphones", link: "/category/earphones" },
  ];
  const { closeCart,setcloseCart} = useStore();


   
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }

      // Update last scroll position
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
    <div className={`bg-[#121212] px-[11%] pt-[40px]  fixed w-screen z-50 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}>
      {/* large screen */}
      <div className="flex items-center text-white uppercase justify-between border-b-[.5px] pb-[40px] border-b-grey">
        <div className="flex items-center gap-[20vw] md:gap-[42px]">
          <GiHamburgerMenu className="lg:hidden text-[20px] text-white cursor-pointer hover:text-primary" onClick={toggleNav} />
          <img src={Images.logo} alt="logo" onClick={()=>navigate('/')}/>
        </div>

        <div className="lg:flex gap-[34px] items-center text-[13px] hidden">
          {navlinks.map((val, index) => (
            <p className={`cursor-pointer hover:text-primary ${name===val.link&&'text-primary'}`}key={index} onClick={()=>navigate(`${val.link}`)}>
              {val.name}
            </p>
          ))}
        </div>
        <PiShoppingCartLight className="text-[20px] cursor-pointer hover:text-primary" onClick={()=>setcloseCart()}/>

      </div>
    </div>
      {closeCart&&<CartDropDown />}
            {openNav && <Backdrop onClose={toggleNav} className='md:hidden'>
              <div className="bg-white w-screen md:hidden">
<p className="pt-[60px]"></p>
                <CategoryList/>
              </div>
              </Backdrop>}
    </>
  );
};

export default Navbar;
