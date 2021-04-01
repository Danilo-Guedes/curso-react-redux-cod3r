import React, { useState, useRef, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = props => {
    const [value1, setValue1] = useState('');
    const counter = useRef(0);

    useEffect(
        function () {
            counter.current += 1;
        },
        [value1]
    );

    return (
        <div className='UseRef'>
            <PageTitle
                title='Hook UseRef'
                subtitle='Retorna um objeto mutável com a propriedade .current!'
            />
            <SectionTitle title='Exercício #1'></SectionTitle>
            <div classname='center'>
                <span className='text'>Mudado [</span>
                <span className='text red'>{counter.current}</span>
                <span className='text'>]</span>
            </div>
            <input
                type='text'
                className='input'
                value={value1}
                onChange={e => setValue1(e.target.value)}
            />
        </div>
    );
};

export default UseRef;
