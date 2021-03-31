import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [counter, setCounter] = useState(0)
    const [texto, setTexto] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #1 - Contador" ></SectionTitle>
            <div className="center">
                <span className="text">{counter}</span>
                <div>
                    <button className="btn" onClick={() => setCounter(counter - 1)}>-1</button>
                    <button className="btn" onClick={() => setCounter(counter + 1)}>+1</button>
                    <button className="btn" onClick={() => setCounter(current => current + 1000)}>+1000</button> 
                    {/* o setCounter retorna por padrão o estado atual da variável e é possível fazer uma função callback como no exemplo da linha acima(current)*/}                </div>
                </div>
            

            <SectionTitle title="Exercício #2" ></SectionTitle>
            <input type="text" className="input" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite algo aqui..."/>
            <span className="text">{texto}</span>
        </div>
    )
}

export default UseState
