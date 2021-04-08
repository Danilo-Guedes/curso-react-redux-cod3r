import React from 'react';

/* Componente estático, não deveria renderizar várias vezes */
const UseCallbackButtons = props => { 
    console.log('renderizado...')
    return (
        <div>
            <button className='btn' onClick={() => props.inc(6)}>+6</button>
            <button className='btn' onClick={() => props.inc(12)}>+12</button>
            <button className='btn' onClick={() => props.inc(18)}>+18</button>
            <button className='btn' onClick={() => props.restart()}>Zerar</button>
        </div>
    );
};

// export default UseCallbackButtons;  #### se não usar o React.memo + useCallback 
//o componente renderiza várias vezes
export default React.memo(UseCallbackButtons);
