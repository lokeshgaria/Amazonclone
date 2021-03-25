import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import Subtotal from './subtotal.js';

function Checkout() {
   
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Gamezone/Dummy/PC/PC-2_12.jpg" alt=""/>
           {
                basket?.length ===0 ? (
                  <div> <h1 className="basket__msg">  Your shopping basket is empty</h1>
                  <p className="basket__msg">you have no items in your basket . to buy one or more items click on "add to basket " next to the item</p>
                  </div>
                ) : 
                <div className="basket__msg">  <h3>Your shopping basket </h3>
                <hr />
                {/** LIst of all the checkout products */}
                {basket.map(item =>(
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     img={item.img}
                     price={item.price}
                     rating={item.rating}
                     key={item.id}
                     /> 
                ))}
                 </div>
                 
            }
            
           </div>
            {basket.length >0 && (
                <div >
                    <Subtotal></Subtotal>
                 </div>
            )}
                 
            
        </div>
    )
}

export default Checkout
