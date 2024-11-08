// src/store.ts
import {create} from 'zustand';
import { toast } from 'react-toastify';

const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const savedTotal = savedCart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const savedShipping = JSON.parse(localStorage.getItem('shipping') || 50); // Default shipping cost: $50
  const savedVat = JSON.parse(localStorage.getItem('vat') || '0'); 
  const savedfinalTotal = JSON.parse(localStorage.getItem('finalTotal') || 0); 

const useStore = create((set,get) => ({
  quantity: 1, // initial state
  closeCart:false,
  cart: savedCart,
  shipping: savedShipping,  // Initial shipping cost
  vat: savedVat,            
  total:savedTotal,
  finalTotal:savedfinalTotal,
  setcloseCart:()=>{
    const closeCart=get().closeCart
    set({closeCart:!closeCart})
  },
  increase: () => {
    const quantity = get().quantity; // Get current quantity
    set({ quantity: quantity + 1 });  // Update quantity
  },
  decrease: () => {
    const quantity = get().quantity; // Get current quantity
    set({ quantity: quantity > 0 ? quantity - 1 : 0 });  // Prevent going below 0
  },

  // Add an item to the cart
  addToCart: (item) => {
    const existingItem = get().cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      set({
        cart: get().cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
      });
    } else {
      set((state) => ({
        cart: [...state.cart, item],
      }));
    }
    toast.success(`${get().quantity} product(s) added to cart successfully!'`)
    set({quantity:1})
    updateTotal();
  },

  // Remove an item from the cart
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
    updateTotal();
  },

  // Remove all items from the cart
  removeAllFromCart: () => {
    set({ cart: [] ,total:0,vat:0,finaltotal:0});
    updateTotal();
  },

  // Increase the quantity of a specific item
  increaseQuantity: (id) => {

    set(() => ({
      cart: get().cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
    updateTotal();
  },

  // Decrease the quantity of a specific item
  decreaseQuantity: (id) => {
    set(() => {
      const updatedCart = get().cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 0,
            }
          : item
      );
      // Remove the item if its quantity reaches 0
      const newCart = updatedCart.filter((item) => item.quantity > 0);
      return { cart: newCart };
    });
    updateTotal();
  },

}));

const updateTotal = () => {
  const cart = useStore.getState().cart;
  const total = cart.reduce((acc, item) => parseFloat(acc + item.quantity * item.price), 0);
  const vat=total*0.2;
  const shipping=50;
  const finalTotal=(parseFloat(total+shipping+vat)).toFixed(2)
  useStore.setState({ total,shipping,vat:vat.toFixed(2),finalTotal });
  saveToLocalStorage()
};

// Helper function to save the cart to localStorage
const saveToLocalStorage = () => {
  const cart = useStore.getState().cart;
  const shipping = useStore.getState().shipping;
  const vat = useStore.getState().vat;
  const total = useStore.getState().total;
  const finalTotal=useStore.getState().finalTotal
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('shipping', JSON.stringify(shipping));
  localStorage.setItem('vat', JSON.stringify(vat));
  localStorage.setItem('total', JSON.stringify(total));
  localStorage.setItem('finalTotal', JSON.stringify(finalTotal));
};


export default useStore;
