import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import DataContext, { data } from '../data/DataContext';
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState(data); //forma arriscada pois está expondo o estado pra toda a aplicação

    return (
        <div className='App'>
            <Store>
                <DataContext.Provider value={{ state, setState }}>
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </DataContext.Provider>
            </Store>
        </div>
    );
};

export default App;
