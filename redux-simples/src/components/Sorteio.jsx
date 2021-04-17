import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function aleatorio(min, max) {
    return parseInt(Math.random()*(max-min)) +min
}

const Sorteio = props => {
    const {min, max} = props
    return (
        <Card title='Sorteio de 1 Número' purple>
            <span>
                <span>Sorteio:</span>
                <strong>{aleatorio(min, max)}</strong>
            </span>
        </Card>
    );
};

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio);
