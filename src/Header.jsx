import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}] = useStateValue();
    return (
        <nav className="header__nav">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header_Search">
                <input type="text" className="header__searchinput" />
                <SearchIcon className="header__searchicon"></SearchIcon>
            </div>
         
            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Lokesh</span>
                        <span className="header__optionLineTwo">SIgn in</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns</span>
                        <span className="header__optionLineTwo">  & Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Your</span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="header__optionLineTwo header__basketcount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
