import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';


const Intervalo = props => {
    const {min, max} = props
    return (
        <div className='Intervalo'>
            <Card title='Intervalos de Números' red>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' value={min} readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' value={max} readOnly />
                </span>
            </Card>
        </div>
    );
};

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo);