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
                    <span className='text'>Sem Usuário</span>
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
                        onClick={() =>
                            dispatch({
                                type: 'login',
                                payload: 'Danilo o mestre',
                            })
                        }
                    >
                        Logar
                    </button>
                    <button
                        className='btn'
                        onClick={() =>
                            dispatch({
                                type: 'logout',
                            })
                        }
                    >
                        Deslogar
                    </button>
                    
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: 'multiplyFor7' })}
                    >
                        x 7
                    </button>
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: 'divideBy25' })}
                    >
                        / 25
                    </button>
                    <button
                        className='btn'
                        onClick={() => dispatch({ type: 'parseToInt' })}
                    >
                        Int
                    </button>
                    <button
                        className='btn'
                        onClick={() =>
                            dispatch({ type: 'addAnyNumber', payload: +10 })
                        }
                    >
                        + 10
                    </button>
                    <button
                        className='btn'
                        onClick={() =>
                            dispatch({ type: 'addAnyNumber', payload: - 15 })
                        }
                    >
                        - 15
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
