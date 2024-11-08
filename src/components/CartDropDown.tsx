import { useNavigate } from 'react-router-dom'
import useStore from '../Utils/Store'
import AddProduct from './AddProduct'
import Backdrop from './Backdrop'
import Button from './Button'
import CartProduct from './CartProduct'

const CartDropDown = () => {
    const navigate=useNavigate()
    const {setcloseCart,cart,removeAllFromCart,total}=useStore()
    
  return (
    <Backdrop onClose={setcloseCart} className='md:justify-end md:items-start justify-center items-center inset-0' >
        <div className="bg-white rounded-md p-[31px] w-[377px] h-fit max-h-[70vh] overflow-auto  md:absolute md:right-[11%] md:top-[150px] m-auto " onClick={(e) => e.stopPropagation()}>

           <div className="grid gap-[44px]">
            <div className="flex justify-between items-center">
                <p className="uppercase text-[18px] font-bold">CART ({cart.length})</p>
{cart.length>0 &&

                <p className="text-black hover:text-primary underline text-[15px] cursor-pointer text-opacity-50 " onClick={()=>removeAllFromCart()}>Remove all</p>
}
            </div>
            {cart.map((val:any,index:any)=>(
<CartProduct index={index} image={val.image} name={val.name} price={val.price}>
                <AddProduct quantity={val.quantity} id={val.id}/>
</CartProduct>
            ))}
            <div className="flex justify-between items-center">
                <p className="uppercase text-[18px] font-bold text-opacity-50 ">total</p>

                <p className="text-black font-bold text-[18px] ">$ {total}</p>
            </div>
            {cart.length>0 &&
            <Button title='CHECKOUT' light={false} className=' justify-center grid' onClick={()=>{
                setcloseCart()
                navigate('/cart')}}/>
            }
           </div>
        </div>
    </Backdrop>
  )
}

export default CartDropDown