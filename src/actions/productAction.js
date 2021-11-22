import firebase from "../firebase"
import { O2A } from 'object-to-array-convert';



export const GET_CART_REQUEST = "GET_CART_REQUEST"
export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_FAILURE = "GET_CART_FAILURE"


export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST"
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS"
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE"


export const DELETE_CART_REQUEST = "ADD_TO_CART_REQUEST"
export const DELETE_CART_SUCCESS = "ADD_TO_CART_SUCCESS"
export const DELETE_CART_FAILURE = "ADD_TO_CART_FAILURE"




export const getCartRequest = () => {
    return {
        type: GET_CART_REQUEST
    }
}


export const getCartSuccess = (product) => {
    return {
        type: GET_CART_SUCCESS,
        payload: product
    }
}


export const getCartFailure = (error) => {
    return {
        type: GET_CART_FAILURE,
        payload: error
    }
}





export const addToCartRequest = () => {
    return {
        type: ADD_TO_CART_REQUEST
    }
}


export const addToCartSuccess = (product) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: product
    }
}


export const addToCartFailure = (error) => {
    return {
        type: ADD_TO_CART_FAILURE,
        payload: error
    }
}





export const deleteCartRequest = () => {
    return {
        type: DELETE_CART_REQUEST
    }
}


export const deleteCartSuccess = () => {
    return {
        type: DELETE_CART_SUCCESS
        // payload: product
    }
}


export const deleteCartFailure = (error) => {
    return {
        type: DELETE_CART_FAILURE,
        payload: error
    }
}









export const getCart = () => {
    return (dispatch) => {
        dispatch(getCartRequest())
        const channelsRef = firebase.database().ref("cart");
        try {
            channelsRef.on("value", snap => {
                    console.log(snap.val())
                    const value = O2A(snap);
                    console.log(value)
                    dispatch(getCartSuccess(value))
                    return value;
                })
        }
        catch(error) {
            dispatch(getCartFailure(error))
        }
    }
}



const query = (product) => {
    const channelsRef = firebase.database().ref('cart');

    channelsRef.on('value', (snapshot) => {
        snapshot.forEach(snap => {
            console.log(snap.val())
            if (product === snap.val()) {
                console.log("product in database")
            }
            else {
                console.log("not in database")
            }


        })
    })
}

export const addToCart = ({count, image, price, suppliers}) => {
    
    return (dispatch) => {
        dispatch(addToCartRequest())

        const channelsRef = firebase.database().ref("cart");
        
        const key = channelsRef.push().key;

        const newProduct = {
            id: key,
            count,
            image,
            price,
            suppliers
            
        }
        
        channelsRef
            .child(key)
            .update(newProduct)
            .then(() => {
                
                console.log("product updated")
                dispatch(addToCartSuccess())
                query(newProduct)

                // channelsRef.on("value", snap => {
                //     console.log(snap.val())
                //     const value = O2A(snap);
                //     console.log(value)
                //     return value;
                // })

                // channelsRef.once('value', (snapshot) => {
                //     snapshot.forEach(snap => {
                //         console.log(snap.val().id)
                //         if (product.product.count === snap.val().product.count) {
                //             console.log("product in database")
                //         }
                //         else {
                //             console.log("not in database")
                //         }


                //     })
                // })
                
            })
            .catch((error) => {
                dispatch(addToCartFailure(error))
            })

        


        // channelsRef.once("value", (snapshot) => {
        //     snapshot.forEach(snap => {
        //         if (!(product.id === snap.val().id)) {
        //             console.log("in")
        //             // channelsRef
        //             //     .child(product.id)
        //             //     .update(product.count + 1)
        //             //     .then(() => {
                            
        //             //         console.log("product updated plus one")
        //             //         console.log(product)
        //             //         dispatch(addToCartSuccess())

        //             //         channelsRef.once('value', (snapshot) => {
        //             //             if(snapshot.val().hasOwnProperty(newProduct.id)) {
        //             //                 console.log("Referral Code exist.");
        //             //             }
        //             //             else {
        //             //                 console.log("Referral Code does not exist.");
        //             //             }
        //             //         })
                            
        //             //     })
        //             //     .catch((error) => {
        //             //         dispatch(addToCartFailure(error))
        //             //     })
        //             channelsRef
        //                 .child(key)
        //                 .update(newProduct)
        //                 .then(() => {
                            
        //                     console.log("product added")
        //                     console.log(product)
        //                     dispatch(addToCartSuccess())
                            
        //                 })
        //                 .catch((error) => {
        //                     dispatch(addToCartFailure(error))
        //                 })
        //                 console.log("not in");
        //         }
        //         else {
                    
        //             console.log("its in")
        //         }

        //         return true;
        //     })
        // })
    }
}

// export const addToCart = (product) => {
    
//     return (dispatch) => {
//         dispatch(addToCartRequest())

//         const channelsRef = firebase.database().ref("cart");
        
//         const key = channelsRef.push().key;

//         const newProduct = {
//             id: key,
//             product
//         }


//         channelsRef
//             .child(key)
//             .update(newProduct)
//             .then(() => {
                
//                 console.log("product added")
//                 console.log(product)
//                 dispatch(addToCartSuccess())

//                 channelsRef.once('value', (snapshot) => {
//                     if(snapshot.val().hasOwnProperty(newProduct.id)) {
//                         console.log("Referral Code exist.");
//                     }
//                     else {
//                         console.log("Referral Code does not exist.");
//                     }
//                 })
                
//             })
//             .catch((error) => {
//                 dispatch(addToCartFailure(error))
//             })
//     }
// }


export const deleteCart = (id) => {
    return (dispatch) => {
        dispatch(deleteCartRequest())

        const channelsRef = firebase.database().ref("cart");

        try {
            channelsRef
                .child(id)
                .remove()
                .then(() => {
                    dispatch(deleteCartSuccess())
                    console.log("item deleted");
                })
        }
        catch(error) {
            dispatch(deleteCartFailure(error))
        }
    }
}