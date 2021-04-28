import React from 'react';

import { Router, Route, Redirect, hashHistory } from 'react-router';

import BillingCycle from '../billingCycle/billingCycle';
import Dashboard from '../dashboard/dashboard';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/BillingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
);
