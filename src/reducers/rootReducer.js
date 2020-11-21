const initialState = {
    users: [
        {
            id: 0,
            name: "John",
            surname: "Doe",
            sex: "male",
            registrationDate: '20.11.2020'
        },
        {
            id: 2,
            name: "Jane",
            surname: "Doe",
            sex: "female",
            registrationDate: '20.11.2020'
        },
    ],
    name: '',
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload] }
        case "CHANGE_NAME":
            return {...state, name: action.payload}
        default:
            return state;
    }
}