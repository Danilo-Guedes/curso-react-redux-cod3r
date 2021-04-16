import React from 'react';

import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <Card title='Soma dos Números' blue >
            <span>
                <span>Soma:</span>
                <strong>10</strong>
            </span>
        </Card>
    );
};
