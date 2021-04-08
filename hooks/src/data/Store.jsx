import React, { useState } from 'react';

const initialState = {
    number: 123456,
    text: 'Danilo mais mestre - usando ContextAPI+useContext()',
};

export const AppContext = React.createContext(initialState);


const Store = props => {

const [state, setState] = useState(initialState)

function updateState(key, newValue){
    setState({
        ...state,
        [key]: newValue
    })
}

return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            {props.children}
            {/* está invocando todos os componentes filhos de Store que agora está encapsulando toda a aplicação */}
        </AppContext.Provider>
    );
};

export default Store;
