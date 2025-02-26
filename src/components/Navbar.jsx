import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14"/>
          </div>   
        </NavLink>
         
        <div className="flex text-white items-center font-medium mr-5 spaxe-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative text-2xl ml-5">
              <FaShoppingCart/>
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span> 

              }
            </div>
          </NavLink>  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
