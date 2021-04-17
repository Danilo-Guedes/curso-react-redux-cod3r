import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title='Sorteio de 1 Número' purple >
            <span>
                <span>Sorteio:</span>
                <strong>{aleatorio}</strong>
            </span>
        </Card>
    );
};
