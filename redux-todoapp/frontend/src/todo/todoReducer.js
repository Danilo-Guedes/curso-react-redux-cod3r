const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [
        {
            _id: 1,
            description: 'Pagar Fatura do Cartão',
            done: true,
        },
        {
            _id: 2,
            description: 'Jogar Csgo',
            done: false,
        },
        {
            _id: 3,
            description: 'Estudar React',
            done: false,
        },
    ],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
};
