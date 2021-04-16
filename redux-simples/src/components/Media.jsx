import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Card title='Média dos Números' green >
            <span>
                <span>Resultado:</span>
                <strong>5</strong>
            </span>
        </Card>
    );
};
