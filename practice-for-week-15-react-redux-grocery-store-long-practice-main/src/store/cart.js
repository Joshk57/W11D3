import { useState } from "react";

export function cartReducer(state = {}, action) {
    switch(action.type) {
        case ADDCART:
            let count = 1
            let newKey = action.id.toString()
            
            if (Object.keys(state).includes(newKey)) {
                count = state[newKey].count + 1
            } 
            
            const newState = {
                ...state,
                [newKey]: {
                        id: action.id,
                        count: count

                    }
                }
            
            return newState;
        default:
            return state;
    }
}

const ADDCART = 'cart/ADDCART'

export function addToCart(produceId) {
    // const [count, setCount] = useState(0)
    // setCount(count + 1)
    
    return ({
        type: ADDCART,
        id: produceId,
        count: 1

    })
}