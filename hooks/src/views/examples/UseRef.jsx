import React, { useState, useRef, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (v1, v2) => {
    return [...v1].map((elem, index) => `${elem}${v2[index] || ''}`).join('');
};

const UseRef = props => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const counter = useRef(0); //retorna um obj mutável com propriedade <var>.current
    //recebe uma propriedade direto do html chamada ref

    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(
        function () {
            counter.current++;
            myInput2.current.focus();
        },
        [value1]
    );

    useEffect(
        function () {
            counter.current += 1;
            myInput1.current.focus();
        },
        [value2]
    );

    return (
        <div className='UseRef'>
            <PageTitle
                title='Hook UseRef'
                subtitle='Retorna um objeto mutável com a propriedade .current!'
            />
            <SectionTitle title='Exercício #1'></SectionTitle>
            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{merge(value1, value2)} [</span>
                    <span className='text red'>{counter.current}</span>
                    <span className='text'>]</span>
                </div>
            </div>
            <input
                type='text'
                className='input'
                value={value1}
                ref={myInput1}
                onChange={e => setValue1(e.target.value)}
            />
            <SectionTitle title='Exercício #2'></SectionTitle>
            <input
                type='text'
                className='input'
                valur={value2}
                ref={myInput2}
                onChange={e => setValue2(e.target.value)}
            />
        </div>
    );
};

export default UseRef;
