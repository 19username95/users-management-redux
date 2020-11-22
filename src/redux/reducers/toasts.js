import { toast } from 'react-toastify';

const initialState = {
    show: false,
}

const toasts = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TOAST':
            const { message, type } = action.payload
            toast[type](message)
            return { message, type, show: true }
        case "HIDE_TOAST":
            return { show: false }
        default:
            return state;
    }
}

export default toasts
