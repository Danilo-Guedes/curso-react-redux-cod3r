import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value,
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);

    return {
        type: 'TODO_SEARCHED',
        payload: request,
    };
};

// PRIMEIRA VERSÃO NÃO PERMITE CHAMAR O SEARCH DEPOIS DA CRIAÇÃO DO TODO
// export const add = (description) => {
//     const request = axios.post(URL, {description});

//     return {
//         type: 'TODO_ADDED',
//         payload: request
//     }
// }

// SEGUNDA VERSÃO USANDO O redux-multi, QUE RETRNA UM ARRAY DE OBJ
//PORÉM AINDA NÃO DANDO CERTO
// export const add = description => {
//     const request = axios.post(URL, { description });

//     return [{ type: 'TODO_ADDED', payload: request }, search()];
// };

//TERCEIRA VERSAO USANDO O redux-thunk
// QUE RETORNA UMA FUNCAO COM OS DISPATCHES
export const add = description => {
    return dispatch => {
        axios
            .post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()));
    };
};

export const markAsDone = todo => {
    return dispatch => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()));
    };
};

export const markAsPending = todo => {
    return dispatch => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()));
    };
};

export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`).then(resp => dispatch(search()));
    };
};

export const clear = () => {
    return {
        type: 'DESCRIPTION_CLEANED',
    };
};
