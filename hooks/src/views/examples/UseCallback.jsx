import React, { useState, useCallback } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = props => {
    const [counter, setCounter] = useState(0);


    const inc = useCallback(function (delta) {
        setCounter(current => current + delta);
    }, [setCounter])

    const restart = useCallback(function() {
        setCounter(0);
    }, [setCounter])

    return (
        <div className='UseCallback'>
            <PageTitle
                title='Hook UseCallback'
                subtitle='Retorna uma função memorizada!'
            />
            <div className='center'>
                <span className='text'>{counter}</span>
                <UseCallbackButtons inc={inc} restart={restart} />
            </div>
        </div>
    );
};

export default UseCallback;
