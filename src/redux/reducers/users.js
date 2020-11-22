const initialState = {
    list: {
        0: {
            id: 0,
            name: "John",
            surname: "Doe",
            sex: "male",
            registrationDate: '20.11.2020'
        },
        1: {
            id: 1,
            name: "Jane",
            surname: "Doe",
            sex: "female",
            registrationDate: '20.11.2020'
        },
    },
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const { user } = action.payload
            return {...state, list: { ...state.list, [user.id]: user } }
        case "EDIT_USER":
            const { id, user: update } = action.payload
            const currentUser = state.list[id]
            return {...state, list: { ...state.list, [id]: { ...currentUser, ...update } }}
        default:
            return state;
    }
}

export default users
