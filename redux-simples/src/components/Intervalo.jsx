import './Intervalo.css';
import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className='Intervalo'>
            <Card title='Intervalos de Números' red>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' value={0} readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' value={10} readOnly />
                </span>
            </Card>
        </div>
    );
};
