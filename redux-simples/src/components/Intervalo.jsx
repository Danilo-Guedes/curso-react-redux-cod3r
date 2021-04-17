import './Intervalo.css';
import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max, onMinChange, onMaxChange} = props
    return (
        <div className='Intervalo'>
            <Card title='Intervalos de Números' red>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' value={min} onChange={e => onMinChange(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' value={max} onChange={e => onMaxChange(+e.target.value)} />
                </span>
            </Card>
        </div>
    );
};
