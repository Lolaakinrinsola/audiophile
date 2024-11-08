
const CartProduct = ({children,index,image,name,price}:any) => {
  return (
    <div className="flex justify-between items-center"key={index}>
                <div className="flex items-center gap-[16px]">
                    <div className="rounded-md w-[64px] max-h-[64px] bg-grey p-auto">
                        <img src={image} alt="" className='object-fit w-[64px] max-h-[64px]' />
                        </div>

                    <div className="grid text-black">
                        <p className="font-bold uppercase text-[15px]">{name}</p>
                        <p className="text-opacity-50">$ {price}</p>
                    </div>
                </div>
{children}
            </div>
  )
}

export default CartProduct