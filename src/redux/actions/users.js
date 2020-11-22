export const addUser = (user) => ({
    type: "ADD_USER",
    payload: { user },
})

export const editUser = (id, user) => ({
    type: "EDIT_USER",
    payload: {
        id,
        user
    },
})