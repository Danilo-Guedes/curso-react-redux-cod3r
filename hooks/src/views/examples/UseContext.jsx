import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';

import DataContext from '../../data/DataContext';
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';

const UseContext = props => {
    const context = useContext(DataContext);

    const changeNumber = n => {
        context.setState({
            ...context.state,
            number: context.state.number + n,
        });
    };

    const { number, text, setNumber, setText } = useContext(AppContext);

    useEffect(function() {
        if (number > 123460) {
            setText('Calma Caceta!!');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[number]);

    return (
        <div className='UseContext'>
            <PageTitle
                title='Hook UseContext'
                subtitle='Aceita um objeto de contexto e retorna o valor atual do contexto!'
            />
            <SectionTitle title='Exercício #01' />
            <div className='center'>
                <span className='text'>{context.state.text}</span>
                <span className='text'>{context.state.number}</span>

                <div>
                    <button className='btn' onClick={() => changeNumber(-1)}>
                        -1
                    </button>
                    <button className='btn' onClick={() => changeNumber(+1)}>
                        +1
                    </button>
                </div>
            </div>
            <SectionTitle title='Exercício #02' />
            <div className='center'>
                <span className='text'>{text}</span>
                <span className='text'>{number}</span>
                <div>
                    <button
                        className='btn'
                        onClick={() => setNumber(number - 1)}
                    >
                        -1
                    </button>
                    <button
                        className='btn'
                        onClick={() => setNumber(number + 1)}
                    >
                        +1
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseContext;
