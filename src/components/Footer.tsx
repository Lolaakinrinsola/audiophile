import { Images } from "../assests/Images";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  const navlinks = [
    { name: "home", link: "/" },
    { name: "headphones", link: "/category/headphones" },
    { name: "speakers", link: "/category/speakers" },
    { name: "earphones", link: "/category/earphones" },
  ];
  return (
    <footer className="px-[11%] py-[75px] bg-[#121212]">
      <div className=" grid text-center justify-center md:text-left md:justify-normal  md:flex gap-[20px] flex-wrap items-center text-white uppercase  pb-[40px] ">
        <img src={Images.logo} alt="logo" onClick={()=>navigate('/')}/>

        <div className="grid text-center justify-center md:text-left md:justify-normal md:flex gap-[34px] items-center text-[13px] ">
          {navlinks.map((val, index) => (
            <p className="cursor-pointer font-bold hover:text-primary" key={index} onClick={()=>navigate(`${val.link}`)}>
              {val.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center md:justify-between gap-[30px]">
        <div className="grid gap-[56px] text-white text-[15px] max-w-[540px] text-center md:text-left text-opacity-50">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="flex gap-[16px] justify-center items-center md:justify-end text-white text-[24px]">
          <IoLogoFacebook className="hover:text-primary cursor-pointer" />
          <IoLogoTwitter className="hover:text-primary cursor-pointer" />
          <FaInstagram className="hover:text-primary cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
