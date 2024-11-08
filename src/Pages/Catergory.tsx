import { useLocation, useNavigate } from "react-router-dom";
import { Images } from "../assests/Images";
import { CategoryMock } from "../assests/Mock";
import Button from "../components/Button";
import CategoryList from "../components/CategoryList";

const Catergory = () => {
  const location = useLocation();
  const navigate=useNavigate()
  const name = location.pathname.split("/").pop();


  const categoryData = CategoryMock.find(cat => cat.categoryName === name);
  if (!categoryData) {
    return <div className="bg-[#121212] py-[100px] pt-[200px] text-white font-bold text-center uppercase text-[40px] w-full">Category not found</div>;  // Show a fallback message if category is not found
  }
  return (
    <>
      <div className="bg-[#121212] py-[100px] pt-[200px] text-white font-bold text-center uppercase text-[40px] w-full">
        <p>{name}</p>
      </div>
      {categoryData.value.map((product,index)=>(

      <div className={`flex flex-wrap gap-[100px] justify-between px-[11%] mt-[160px]  ${
        index % 2 !== 0 ? 'flex-row-reverse' : ''
      }`} key={index}>
        <div className="rounded-md w-[540px] bg-grey m-auto grid justify-center">
          <div className="m-auto grid justify-center items-center">
            <img src={product.image} alt="headphone" className="m-auto" />
            <img src={Images.oval} alt="shadow" />
          </div>
        </div>

        <div className="max-w-[450px] grid gap-[32px] h-fit my-auto">
            {product.new&&
          <p className="text-primary font-thin text-[14px]">NEW PRODUCT</p>
            
            }
          <p className="text-black font-bold text-[40px] ">
          {product.name}
          </p>
          <p className="text-[15px] text-black ">
            {product.descp}
          </p>
          <Button title="See Product" light={false} className="w-fit" onClick={()=>navigate(`${product.link}`,{state:{product}})}/>
        </div>
      </div>
      ))}
        
      <CategoryList />
    </>
  );
};

export default Catergory;
