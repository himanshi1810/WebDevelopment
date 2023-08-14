import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div >

        <div className="flex">
        <div className="flex flex-col">
        <div className="text-green-500 ">Your Cart</div>
          <div className="text-green-500 text-xl font-bold">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>
        
         
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button className="border rounded-md bg-green-400 font-bold px-4 py-2 cursor-pointer">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center mt-[270px] font-bold">
      <h1 className="text-green-700  px-5 py-3">Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-green-700  px-5 py-1 cursor-pointer border border-gray-400 bg-green-300 rounded-[10px] hover:bg-green-400 transition-all duration-200">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
