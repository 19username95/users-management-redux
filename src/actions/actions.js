export const addUser = (userData) => ({
    type: "ADD_USER",
    payload: userData,
})

export const changeName = (name) => ({
    type: "CHANGE_NAME",
    payload: name,
})