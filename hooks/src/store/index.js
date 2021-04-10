export const initialState = {
    other: '...',
    products: [],
    cart: [],
    user: null,
    // foco neste atributo do estado
    number: 0,
};

export function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'login':
            return { ...state, user: { name: action.payload } };
        case 'multiplyFor7':
            return { ...state, number: state.number * 7 };
        case 'divideBy25':
            return { ...state, number: state.number / 25 };
        case 'parseToInt':
            return { ...state, number: parseInt(state.number) };
        case 'addAnyNumber':
            return { ...state, number: state.number + action.payload };
        case 'logout':
            return { ...state, user: { name: 'Usuário deslogado' } };
        default:
            return state;
    }
}