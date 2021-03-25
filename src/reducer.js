export const initialState = {
    basket: [{
        title:"Acer Nitro 5 AN515-43 15.6 inch FHD IPS Display Gaming Laptop (AMD Ryzen 5 3550H Processor/8GB Ram/512GB SSD/Win10/GTX 1650 Graphics), 2.2kgs, Obsidian Black",
        img:"https://m.media-amazon.com/images/I/81IXuyeJhYL._AC_UY218_.jpg",
        price:57990,
        rating:4,
        id:"111212",
    }],
    user : null,
};
export const  getBasketTotal = (basket) =>{
    
     return basket?.reduce((amount , item) => item.price + amount , 0);
     
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic to add to basket
            return {
                ...state,
                basket:[...state.basket , action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //logic tp remove  to basket
            let newbasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id ===action.id);
            if(index >= 0 ){
                  newbasket.splice(index,1);
                  
            }else{
                console.log(`warn product (id : ${action.id})`)
            }
            return {...state ,
                 basket : newbasket};
            default : 
            return state ;
    }
}
export default reducer; 