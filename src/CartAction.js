export const AddToCartAction=(payload)=>{
    return{
        type: 'ADD_TO_CART',
        payload
    }
}

export const RemoveFromCartAction=(payload)=>{
    return{
        type: 'REMOVE_FROM_CART',
        payload
    }
}