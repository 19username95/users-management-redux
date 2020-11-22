export const showToast = (message, type) => ({
    type: "SHOW_TOAST",
    payload: { message, type },
})

export const hideToast = () => ({
    type: "HIDE_TOAST",
})