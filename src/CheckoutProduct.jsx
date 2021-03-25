import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './checkoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id , title ,price , img , rating}) {
    const [{basket} , dispatch] = useStateValue();

const removefrombasket = () =>{
    //remove item from basket
   
   dispatch({
       type : "REMOVE_FROM_BASKET",
       id : id
   })
}
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={img} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) =>(
                            <StarIcon key={i}></StarIcon>
                    ))}
                </div>
                <button onClick={removefrombasket} className="checkoutProduct__button">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
