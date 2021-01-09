export const DISPLAY_LOGIN_SECTION = "DISPLAY_LOGIN_SECTION"
export const CLOSE_LOGIN_SECTION = "CLOSE_LOGIN_SECTION"
export const DISPLAY_SIGNUP_SECTION = "DISPLAY_SIGNUP_SECTION"
export const CLOSE_SIGNUP_SECTION = "CLOSE_SIGNUP_SECTION"




export const displayLoginSection = () => {
    return {
        type: DISPLAY_LOGIN_SECTION
    }
}

export const closeLoginSection = () => {
    return {
        type: CLOSE_LOGIN_SECTION
    }
}


export const displaySignupSection = () => {
    return {
        type: DISPLAY_SIGNUP_SECTION
    }
}

export const closeSignupSection = () => {
    return {
        type: CLOSE_SIGNUP_SECTION
    }
}