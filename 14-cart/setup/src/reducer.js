const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }
    // if (action.type === "INCREASE") {
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (cartItem.id === action.payload) {
    //             return { ...cartItem, amount: cartItem.amount + 1 };
    //         }
    //         return cartItem;
    //     });
    //     return {
    //         ...state,
    //         cart: tempCart,
    //     };
    // }
    // if (action.type === "DECREASE") {
    //     let tempCart = state.cart
    //         .map((cartItem) => {
    //             if (cartItem.id === action.payload) {
    //                 return { ...cartItem, amount: cartItem.amount - 1 };
    //             }
    //             return cartItem;
    //         })
    //         .filter((cartItem) => cartItem.amount !== 0);
    //     return {
    //         ...state,
    //         cart: tempCart,
    //     };
    // }
    if(action.type === "TOGGLE_AMOUNT"){
        let tempCart = state.cart.map(cartItem =>{
            if(cartItem.id === action.payload.id){
                if(action.payload.type ==="increase")
                    return {...cartItem, amount: cartItem.amount+1};
                if(action.payload.type ==="decrease")
                    return {...cartItem, amount: cartItem.amount-1};
            }
            console.log(cartItem)
            return cartItem;
        }).filter(cartItem=>cartItem.amount !== 0);
        return{...state, cart:tempCart}
    }

    if (action.type === "GET_TOTAL") {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemPrice = amount * price;
                cartTotal.amount += amount;
                cartTotal.total += itemPrice;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0,
            }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount };
    }
    if(action.type === "LOADING"){
        return{...state, loading:true}
    } 
    if(action.type === "DISPLAY_ITEMS"){
        return{...state,loading:false,cart:action.payload}
    }
    throw new Error("No matching types")
};

export default reducer;
