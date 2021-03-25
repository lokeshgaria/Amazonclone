import React from 'react'
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function Product({ id, title, img, price, rating }) {

    const [{ } , dispatch] = useStateValue();
    const addToBasket = () =>{
     //add item to basket
    dispatch({
        type : 'ADD_TO_BASKET',
        item : {
            id : id,
            title : title,
            img : img , 
            price : price,
            rating : rating,
        }
    })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p className="product__title">{title}</p>
                <p className="prduct__price">
                  
                    <strong>₹ {price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <StarIcon />
                        ))
                    }
                </div>
            </div>
            <img src={img} alt=""></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
