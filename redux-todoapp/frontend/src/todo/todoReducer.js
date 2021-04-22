const INITIAL_STATE = { description: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload };
        // case 'TODO_ADDED':  RETIRATO POIS FAZIA A MESMA COISA QUE O CLEANED
        //     return {...state, description: ''};
        // case 'TODO_MARKED_AS_DONE': RETIRANO POIS NESTE CASO NÃO MANIPULAVA O STATE
        //     return {...state}
        case 'DESCRIPTION_CLEANED':
            return {...state, description: ''};
        default:
            return state;
    }
};
