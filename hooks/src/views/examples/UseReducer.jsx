import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
    other: '...',
    products: [],
    cart: [],
    user: null,
    // foco neste atributo do estado
    number: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'login':
            return { ...state, user: { name: action.payload}};
        default:
            return state;
    }
}

const UseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='UseReducer'>
            <PageTitle
                title='Hook UseReducer'
                subtitle='Uma outra forma de ter estado em componentes funcionais!'
            />
            <div className='center'>
                {state.user ? (
                    <span className='text'>{state.user.name}</span>
                ) : (
                    <span className="text">Sem Usuário</span> 
                )}
                <span className='text'>{state.number}</span>
                <div>
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: 'numberAdd2' })}
                    >
                        +2
                    </button>
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: 'login', payload: 'Danilo o mestre' })}
                    >
                        Logar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
