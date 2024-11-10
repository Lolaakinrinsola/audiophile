import { useNavigate } from "react-router-dom";
import { Images } from "../assests/Images";
import Button from "../components/Button";
import CategoryList from "../components/CategoryList";

const Home = () => {
    const navigate=useNavigate()
  return (
    <>
      
      <div className="min-h-screen w-screen bg-[#121212] px-[11%] justify-between flex flex-wrap pt-[120px] lg:pt-0 items-center">
        <div className=" max-w-[26%] text-white grid gap-[24px] h-fit">
          <p className="font-thin text-[14px] text-grey">NEW PRODUCT</p>
          <p className="font-bold text-[40px] md:text-[56px]">XX99 Mark II HeadphoneS</p>
          <p className="text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button light={false} title='SEE PRODUCT' className='w-fit' onClick={()=>navigate('/product/XX99-Mark-II-Headphones')}/>
        </div>
        <img
          src={Images.bitmap}
          alt="bitmap"
          className="lg:w-[50vw] object-contain"
        />
      </div>
      <CategoryList/>
      <div className="mx-[11%] bg-primary rounded-md px-[10.5%] flex justify-between gap-[50px] flex-wrap items-end pt-[133px]">

        <img src={Images.bigSpeaker} alt="" />

      <div className=" max-w-[350px] text-white grid gap-[24px] h-fit pb-[133px]">
         
          <p className="font-bold text-[56px]">ZX9
SPEAKER</p>
          <p className="text-[15px]">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Button light={true} hover={false} title='SEE PRODUCT' className='w-fit' onClick={()=>navigate('/product/ZX9-SPEAKER')}/>
        </div>
      </div>

      <div className={`my-[50px] rounded-sm mx-[11%] flex flex-wrap justify-between items-center pl-[9%] h-[320px] `} style={{ backgroundImage: `url(${require('../assests/bgspeaker.jpg')})` }}>
        <div className="grid gap-[40px]">
            <p className="text-[28px] font-extrabold">ZX7 SPEAKER</p>
            <Button light={true} hover={false} title='SEE PRODUCT' className='w-fit' onClick={()=>navigate('/product/ZX7-SPEAKER')}/>
        </div>
      </div>

      <div className="mx-[11%] my-[50px] grid md:grid-cols-2 gap-[40px]">
<img src={Images.bitmap2} alt="speaker" className="rounded-md" />

<div className="rounded-md bg-grey pl-[17%] py-[98px] grid gap-[30px]">
    <p className="font-semibold text-[28px]">YX1 EARPHONES</p>
    <Button title='SEE PRODUCT' light={true} className='w-fit' onClick={()=>navigate('/product/YX1-WIRELESS-EARPHONES')}/>
</div>
      </div>
      
    </>
  );
};

export default Home;
