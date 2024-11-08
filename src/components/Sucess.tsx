import Backdrop from './Backdrop'
import { RiCheckboxCircleFill } from "react-icons/ri";
import useStore from '../Utils/Store';
import Button from './Button';
import CartProduct from './CartProduct';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Sucess = ({toggleModal}:any) => {
    const navigate=useNavigate()
  const { cart,finalTotal,removeAllFromCart} = useStore();

  const firstProduct=[cart[0]] ||[]

  function resetCart() {
    removeAllFromCart()
    toggleModal()
  }

  return (
    <Backdrop onClose={resetCart} className=' justify-center items-center inset-0' >
        <div className="bg-white rounded-lg gap-[24px] p-[43px] grid max-w-[640px]">
            <div className="flex justify-between">

        <RiCheckboxCircleFill className='text-[70px] text-primary'/>
        <IoMdClose className='cursor-pointer hover:text-primary text-[20px]' onClick={toggleModal}/>
            </div>
        <p className="font-bold text-[32px] max-w-[284px]">THANK YOU
FOR YOUR ORDER</p>
<p className="text-opacity-50 text-[15px]">You will receive an email confirmation shortly.</p>
<div className="rounded-lg grid md:grid-cols-2 w-full">
    <div className="rounded-t-md md:rounded-l-md bg-grey  p-[40px]">
    {firstProduct.map((val: any, index: any) => (
                <CartProduct
                index={index}
                  image={val.image}
                  name={val.name}
                  price={val.price}
                >
                  <p className="text-black text-opacity-50 text-[15px]">
                    x{val.quantity}
                  </p>
                </CartProduct>
              ))}

              <div className="mt-[20px] pt-[20px] border-t-[1px] border-black border-opacity-50 text-center">
                and {cart.length-1} other item(s)
              </div>
    </div>
    <div className="rounded-b-md md:rounded-r-md bg-black p-[40px]">
        <p className="text-white text-opacity-50">GRAND TOTAL</p>
        <p className="text-white font-bold text-[18px]">$ {finalTotal}</p>
    </div>
</div>

<Button title='BACK TO HOME' className='w-full h-fit grid justify-center' onClick={()=>{
    removeAllFromCart();
    navigate('/')}}/>
        </div>
    </Backdrop>
  )
}

export default Sucess