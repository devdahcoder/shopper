export const DISPLAY_LOGIN_SECTION = "DISPLAY_LOGIN_SECTION"
export const CLOSE_LOGIN_SECTION = "CLOSE_LOGIN_SECTION"



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