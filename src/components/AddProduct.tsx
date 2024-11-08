import { FaMinus, FaPlus } from 'react-icons/fa6'
import useStore from '../Utils/Store';


const AddProduct = ({quantity,id}:any) => {
  const { increase, decrease,increaseQuantity,decreaseQuantity } = useStore();

function handleIncrease() {
  if(id) return increaseQuantity(id) 
  else increase()
}

function handleDecrease() {
  if(id) return decreaseQuantity(id)
  else decrease()
}
  return (
            <div className="bg-grey rounded-sm p-[15px] flex gap-[21px] items-center">
            <FaMinus className='text-black hover:text-primary cursor-pointer' onClick={handleDecrease}/>
            <p>{quantity}</p>
            <FaPlus className='text-black hover:text-primary cursor-pointer' onClick={handleIncrease}/>
            </div>
         
  )
}

export default AddProduct