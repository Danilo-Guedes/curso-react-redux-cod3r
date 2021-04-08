import React from 'react';

export const data = {
    number: 4574,
    text: 'Danilo mestre - usando ContextAPI',
};

const DataContext = React.createContext();
//pode passar o deafultvalue direto na função
// ex.: React.createContext(data)
export default DataContext;
