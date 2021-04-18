import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import {
    alterarNumeroMinimo,
    alterarNumeroMaximo,
} from '../store/actions/numeros';

const Intervalo = props => {
    const { min, max, alterarMinimo, alterarMaximo } = props;

    return (
        <div className='Intervalo'>
            <Card title='Intervalos de Números' red>
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type='number'
                        value={min}
                        onChange={e => alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type='number'
                        value={max}
                        onChange={e => alterarMaximo(+e.target.value)}
                    />
                </span>
            </Card>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            //action creator => action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            //action creator => action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
