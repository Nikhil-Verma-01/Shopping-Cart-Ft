import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";



const CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
    <div className="flex mb-6 pg-white shadow-lg rounded-lg">
      <div className="w-full mr-4 ">
        <div className="flex justify-between">
          <div >
            <img className="w-full h-full object-cover " src={item.image}/>
          </div>

          <div className=" ml-5 flex flex-col">
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <h2 className="text-gray-600">{item.description.split(" ").slice(0,20).join(" ") + "..."}</h2>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-green-500 font-bold ml-40 text-lg">${item.price}</p>
          <div className="text-red-500 cursor-pointer p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-300"
          onClick={removeFromCart}>
            <FcDeleteDatabase size={24}/>
          </div>
        </div>



      </div>
    </div>
  );
};

export default CartItem;
