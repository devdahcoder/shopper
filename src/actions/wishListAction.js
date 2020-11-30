export const ADD_TO_WISH_LIST = "ADD_TO_WISH_LIST"
export const REMOVE_FROM_WISH_LIST = "REMOVE_FROM_WISH_LIST"



export const addToWishList = (wishList) => {
    return {
        type: ADD_TO_WISH_LIST,
        payload: wishList
    }
}

export const removeFromWishList = (id) => {
    return {
        type: REMOVE_FROM_WISH_LIST,
        payload: id
    }
}