import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const calcSquared = n => n**2

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [squared, setSquared] = useState(0)

    useEffect(() => setSquared(calcSquared(number)),[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #1"> </SectionTitle>
            <div className="center">
            <div>
                <span className="text">Quadrado: </span>
                <span className="text red">{squared}</span>
            </div>
                <input type="number" 
                className="input" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)}/>                
            </div>
            <SectionTitle title="Exercício #2"> </SectionTitle>
            <div className="center">

            </div>
        </div>
    )
}

export default UseEffect
