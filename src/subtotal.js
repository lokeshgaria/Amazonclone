import React from 'react'
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            {/** price of subtoatl */}
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    subtotal ( {basket.length} items) : <strong>{` ${value}` }</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />This order containes a gift
                </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"₹"}
            />



            <button>proced to check out</button>
        </div>
    )
}  

export default Subtotal
