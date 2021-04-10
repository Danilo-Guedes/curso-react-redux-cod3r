import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useMyCounter } from '../../hooks/useMyCounter'
import { useMyFetch } from '../../hooks/useMyFetch'

const UseCustom = (props) => {
    const [count, inc, dec] = useMyCounter(10);

    ////////////////////////////

    const url = 'http://files.cod3r.com.br/curso-react/estados.json';

    const response = useMyFetch(url)

    function showEstados(estados) {
        return estados.map(estado => <li key={estado.nome}>{estado.nome} - {estado.sigla}</li>)
    }
    // console.log(response.data)

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={dec}>-1</button>
                    <button className="btn" onClick={inc}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showEstados(response.data) : false}
                </ul>
            </div>

        </div>
    )
}

export default UseCustom
