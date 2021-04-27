import React from 'react';

import MenuTree from './menuTree'
import MenuItem from './menuItem'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#/" icon="dashboard" label="Dashboard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#BillingCycles" label="Ciclos de Pagamentos" icon="usd" />
        </MenuTree>

    </ul>
)