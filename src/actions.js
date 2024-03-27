export const signUp = (userData) => {
    return {
        type: 'SIGN_UP',
        payload: userData
    };
};

export const logIn = (userData) => {
    return {
        type: 'LOG_IN',
        payload: userData
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};
