import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Card title='Sorteio de 1 Número' purple>
            <span>
                <span>Sorteio:</span>
                <strong>{7}</strong>
            </span>
        </Card>
    );
};
