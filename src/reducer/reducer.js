export const reducer = (state, action) => {
    if (action.type === "EMPTY") {
        return {
            ...state,
            error: true,
            message: 'Please enter a value'
        }
    }

    if (action.type === "RESET") {
        return {
            ...state,
            error: false,
            success: false,
            message: ''
        }
    }

    if (action.type === "ADD") {
        return {
            ...state,
            success: true,
            message: 'Added Successfully',
            data: [...state.data, action.payload]
        }
    }



}