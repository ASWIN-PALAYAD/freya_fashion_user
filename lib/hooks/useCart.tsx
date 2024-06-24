import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  item: ProductType;
  quantity: number;
  color?: string; // optional
  size?: string; //optional
}

interface CartStore {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (idToRemove: String) => void;
  increaseQuantity:(idToIncreas:String) => void;
  decreaseQuantity:(idToDecrease:String) => void;
  clearCart:()=>void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    cartItems: [],
    addItem: (data: CartItem) => {
      const { item, quantity, color, size } = data
      const currentItems = get().cartItems //get all items in cart
      const isExisting = currentItems.find(
        (cartItem) => cartItem.item._id === item._id
      )
      if (isExisting) {
        return toast.dismiss("Item already in cart")
      }
      set({ cartItems: [...currentItems, { item, quantity, color, size }] })
      return toast.success("Item added to cart");
    },
    removeItem:(idToRemove:String) => {
        const newCartItems = get().cartItems.filter((cartItem)=>cartItem.item._id !== idToRemove)
        set({cartItems:newCartItems})
        return toast.success("Item removed from cart")
    },
    increaseQuantity: (idToIncrease:String) => {
        const newCartItems = get().cartItems.map((cartItem)=>
            cartItem.item._id === idToIncrease ? {...cartItem, quantity:cartItem.quantity + 1} : cartItem
        );
        set({cartItems:newCartItems});
        return toast.success('Item quantity increased');
    },
    decreaseQuantity: (idToDecrease:String) => {
        const newCartItems = get().cartItems.map((cartItem)=>
            cartItem.item._id === idToDecrease ? {...cartItem, quantity:cartItem.quantity - 1} : cartItem
        );
        set({cartItems:newCartItems});
        return toast.success("Item quantity decreased")
    },
    clearCart:()=> {
        set({cartItems:[]});
        return toast.success("Cart cleared");
    }
    
  }),
  {
    name:"cart-storage",
    storage:createJSONStorage(()=>localStorage)
  }

)
);

export default useCart;
