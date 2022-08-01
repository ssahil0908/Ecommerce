import {React,useState,useEffect} from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Right = ({iteam}) => {

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam])

    const totalAmount = () => {
        let price = 0;
        iteam.map((item) => {
            price = item.price.cost + price
        });
        setPrice(price)
    }
    const proceesby = ()=>{
        toast.success("Order Confirmed!",{
            position: "top-center",
        }) 
       
    }

    return <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
        <div className="cost_right">
            <p>Your order is eligible for FREE Delivery.</p> <br />
        
            <h3>Subtotal ({iteam.length} items): <span style={{ fotnWeight: 700 }}> ₹{price}.00</span></h3>
            <button className="rightbuy_btn" onClick={proceesby} >Proceed to Buy</button>
                
        </div>
    </div>;
};

export default Right;
