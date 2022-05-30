export const incNumber = (payload) => {
    return {
        type: "INCREMENT",
        payload
    }
}

export const decNumber = (payload) => {
    return {
        type: "DECREMENT",
        payload
    }
}