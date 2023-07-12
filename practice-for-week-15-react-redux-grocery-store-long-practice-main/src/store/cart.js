import { useState } from "react";

export function cartReducer(state = {}, action) {
    let newObj = Object.assign({}, state)
    switch(action.type) {
        case RESETCART:
            newObj = {};
            return newObj;
        case DECREMENTCART:
            if (state[action.id].count === 1){
                delete newObj[action.id]
                return newObj;
            } else {
                newObj[action.id].count -= 1;
                return newObj; 
            }
        case REMOVEFROMCART:
            delete newObj[action.id]
            return newObj;
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
const REMOVEFROMCART = 'cart/REMOVEFROMCART'
const DECREMENTCART = 'cart/DECREMENTCART'
const RESETCART = 'cart/RESETCART'

export function resetCart(){
    return({
        type:RESETCART
    })
}

export function decrementCart(produceId){
    return ({
        type: DECREMENTCART,
        id: produceId
    })
}

export function removeFromCart(produceId){
    return({
        type: REMOVEFROMCART,
        id: produceId
    })
}

export function addToCart(produceId) {
    // const [count, setCount] = useState(0)
    // setCount(count + 1)
    
    return ({
        type: ADDCART,
        id: produceId,
        count: 1

    })
}