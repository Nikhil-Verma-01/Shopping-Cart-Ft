import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const Product = ({posts}) => {

  const {cart} = useSelector( (state) => state);
  const dispatch = useDispatch();

  const addtoCart = () =>{
    dispatch(add(posts));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(posts.id));
    toast.error("Item is Removed")
  }

  return (
    <div className="flex flex-col items-center justify-between
     hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-2xl">
      <div className="font-semibold text-gray-700 text-left turncate w-40 mt-1">
        <p>{posts.title}</p>
      </div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
        <p>{posts.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={posts.image} className="h-full w-full"/>
      </div>
      <div className="flex justify-center gap-10 items-center w-full mt-5">
        <div className="text-green-600 font-semibold">
          <p>${posts.price}</p>
        </div>

        <div>
          {
            cart.some((p) => p.id == posts.id) ?
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
             text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
              Remove Item
            </button>) :
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
             text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            onClick={addtoCart}>
              Add Item
            </button>)
          }
        </div>
      </div>
      
      
    </div>);
};

export default Product;
