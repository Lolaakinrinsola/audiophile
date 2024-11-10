import { Images } from "../assests/Images";
import Button from "../components/Button";
import CategoryList from "../components/CategoryList";
import AddProduct from "../components/AddProduct";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryMock } from "../assests/Mock";
import useStore from "../Utils/Store";

const Product = () => {
    const navigate=useNavigate()
   const { name } = useParams();
   // Find the product from the CategoryMock array that matches the name
   const product = CategoryMock.flatMap(category => category.value).find(item => item.link === `/product/${name}`);
   const { quantity,increase, decrease,addToCart } = useStore();

    // Find the other products, excluding the current product
  const getRandomProducts = (currentProductId:any) => {
    // Flatten all products from all categories
    const allProducts = CategoryMock.flatMap(category => category.value);
    
    // Filter out the current product by its ID
    const filteredProducts = allProducts.filter(item => item.id !== currentProductId);
    
    // Randomly select 3 products
    const randomProducts:any = [];
    while (randomProducts.length < 3) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      const randomProduct = filteredProducts[randomIndex];
      
      // Ensure no duplicates
      if (!randomProducts.some((product:any) => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    
    return randomProducts;
  };

  // Get the 3 random products
  const randomProducts = product ? getRandomProducts(product.id) : [];

   if (!product) {
     return <div className={`flex flex-wrap gap-[100px] justify-between px-[11%] pt-[160px] `}>Product not found.</div>;
   }
  return (
    <>
      <div
        className={`flex flex-wrap gap-[100px] justify-between px-[11%] pt-[160px] `}
      >
        <div className="rounded-md w-[540px] bg-grey m-auto grid justify-center">
          <div className="m-auto">
            <img src={product.image} alt={product.name} />
            <img src={Images.oval} alt="shadow" />
          </div>
        </div>

        <div className="max-w-[450px] grid gap-[32px] h-fit my-auto">
          {product.new && (
            <p className="text-primary font-thin text-[14px]">NEW PRODUCT</p>
          )}

          <p className="text-black font-bold text-[40px] ">{product.name}</p>
          <p className="text-[15px] text-black ">{product.descp}</p>
          <p className="font-bold text-[18px]">$ {product.price}</p>
    <div className="h-fit flex flex-wrap gap-[16px] ">
          <AddProduct quantity={quantity} increase={increase} decrease={decrease}/>
          <Button title="ADD TO CART" light={false} className="w-fit" onClick={()=>addToCart({
      id: product?.id,
      name: product?.name,
      price: product?.price,
      image:product?.image,
      quantity,
    })}/>
</div>
        </div>
      </div>

      <div className="flex flex-wrap  px-[11%] my-[100px] items-start gap-[125px]">
        <div className="grid gap-[32px] max-w-[635px]">
          <p className="font-bold text-[32px]">FEATURES</p>
          <p className="font-thin text-[15px] ]" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: product.features.descp }} />

         
        </div>

        <div className="grid gap-[32px] ">
          <p className="font-bold uppercase">in the box</p>
          {product.features.inBox.map((val: any, index: any) => (
            <div className="grid gap-[8px] h-fit" key={index}>
              <div className="flex items-center gap-[24px]">
                <p className="text-primary text-[15px] font-bold">
                  {val.quantity}
                </p>
                <p className="font-thin text-[15px]">{val.descrp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-rows-[1fr_1fr_2fr] md:grid-cols-4 md:grid-rows-2 min-h-[592px] mx-[11%] gap-[32px]">
        <div className="md:col-span-2 md:row-span-1 bg-gray-200 h-full rounded-md">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 bg-gray-300 h-full rounded-md">
          <img
            src={product.images[1]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:col-span-2 md:row-start-2 bg-gray-400 h-full rounded-md">
          <img
            src={product.images[2]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="grid gap-[64px] my-[100px] mx-[11%] text-center">
        <p className="font-bold uppercase text-[32px]">you may also like</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[80px]" >
        {randomProducts.map((val:any,index:any)=>(
          <div className="grid gap-[40px] "key={index}>
            <div className=" bg-grey h-[318px] grid justify-center m-auto w-full md:w-[350px]">
              <img src={val.image} className="m-auto w-[150px] h-[190px]" alt={val.name} />
            </div>
            <p className="font-bold text-[24px] uppercase">{val.name}</p>
            <Button
              title="See Product"
              light={false}
              className="w-fit m-auto"
              onClick={()=>navigate(`${val.link}`)}
            />
          </div>
          
          ))}
        </div>

      </div>
      <CategoryList />
    </>
  );
};

export default Product;
