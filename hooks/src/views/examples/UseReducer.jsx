import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

import { initialState, reducer } from '../../store';
import {
    numberAdd2,
    multiplyFor7,
    divideBy25,
    parseToInt,
    add10,
    sub15,
} from '../../store/actions/number';
import { login, logout } from '../../store/actions/user';

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
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                    <button className='btn' onClick={() => login(dispatch)}>
                        Logar
                    </button>
                    <button className='btn' onClick={() => logout(dispatch)}>
                        Deslogar
                    </button>

                    <button
                        className='btn'
                        onClick={() => multiplyFor7(dispatch)}
                    >
                        x 7
                    </button>
                    <button
                        className='btn'
                        onClick={() => divideBy25(dispatch)}
                    >
                        / 25
                    </button>
                    <button
                        className='btn'
                        onClick={() => parseToInt(dispatch)}
                    >
                        Int
                    </button>
                    <button className='btn' onClick={() => add10(dispatch)}>
                        + 10
                    </button>
                    <button className='btn' onClick={() => sub15(dispatch)}>
                        - 15
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
