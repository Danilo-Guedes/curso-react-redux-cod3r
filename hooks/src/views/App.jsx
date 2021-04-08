import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import DataContext, { data } from '../data/DataContext';

const App = props => {
    const [state, setState] = useState(data); //forma arriscada pois está expondo o estado pra toda a aplicação

    return (
        <div className='App'>
            <DataContext.Provider value={{ state, setState }}>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </DataContext.Provider>
        </div>
    );
};

export default App;
