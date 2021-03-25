import React from 'react'
import './home.css';
import Product from './Product.jsx';
function Home() {
    return (
        <div className="home">
            <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon img" />

            {/**product id , title , rating , img  */}
            {/**product  */}
            <div className="home__row">
                <Product
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    img="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg"
                    price={138}
                    rating={5}
                    id="1112342"
                />

                <Product
                    title="Echo Dot (4th Gen, Black) Combo with Wipro 9W LED Smart Color Bulb - Smart Home Starter Kit"
                    img ="https://images-na.ssl-images-amazon.com/images/I/4142Sf13gcL._SX425_.jpg"
                    price={3,549}
                    rating={5}
                    id="111342"
                />
            </div>

            <div className="home__row">
                <Product
                    title="Acer Nitro 5 AN515-43 15.6 inch FHD IPS Display Gaming Laptop (AMD Ryzen 5 3550H Processor/8GB Ram/512GB SSD/Win10/GTX 1650 Graphics), 2.2kgs, Obsidian Black"
                    img="https://m.media-amazon.com/images/I/81IXuyeJhYL._AC_UY218_.jpg"
                    price={57990}
                    rating={4}
                    id="111212"
                />

                <Product
                    title="Badoliya & Sons Men's Brocade Zari Nehru Jacket/Waist Coat"
                    img="https://images-na.ssl-images-amazon.com/images/I/91g8El6DmeL._UX679_.jpg"
                    price={1489}
                    rating={4}
                    id="1431212"
                />

                <Product
                    title="Butterfly Smart Mixer Grinder, 750W, 4 Jars (Grey)"
                    img="https://images-na.ssl-images-amazon.com/images/I/71%2BcDVETcIL._SL1500_.jpg"
                    price={2999}
                    rating={4}
                    id="178212"
                />
            </div>

            <div className="home__row">
                <Product
                    title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
                    img="https://images-na.ssl-images-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
                    price={37990.00}
                    rating={4}
                    id="451212"
                />

                
            </div>

        </div>

    )
}

export default Home;
