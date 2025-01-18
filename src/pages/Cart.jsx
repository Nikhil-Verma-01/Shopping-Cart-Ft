import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce ( (acc, curr) => acc + curr.price, 0) );
  }, [cart])

  return (
  <div className="flex items-start justify-between max-w-6xl mx-auto p-8 mt-24">
    {
      cart.length > 0 ?
      (<div className="flex flex-col lg:flex-row w-full">
        <div className="flex-1 lg:max-h-screen overflow-y-auto no-scrollbar pr-4">
          {
            cart.map( (item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))
          }
        </div>

        <div className="flex flex-col justify-between h-[80vh] w-full lg:w-1/3 lg:sticky lg:top-20 lg:ml-8 mt-8 lg:mt-0 p-6">
          <div>
            <div className="font-semibold uppercase text-sm text-green-700">Your Cart</div>
            <div className="font-bold text-4xl uppercase -mt-1 text-green-700">Summary</div>
            <p className="text-lg mt-3 text-[16px] font-semibold">
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div className="text-lg text-gray-700 font-semibold">
            <p>Total Amount: <strong className="text-black">${totalAmount.toFixed(2)}</strong></p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700 transition duration-300">
              Checkout Now
            </button>
          </div>

        </div>

      </div>):

      (<div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-500 font-bold">Your Cart is empty</h1>
          <NavLink to={"/"}>
            <button className="border border-gray-300 py-2 px-6 text-[14px] rounded-md text-white font-semibold mt-4 bg-green-600">
              Shop Now
            </button>
          </NavLink>
        </div>
        
      </div>)
    }
  </div>);
};

export default Cart;
