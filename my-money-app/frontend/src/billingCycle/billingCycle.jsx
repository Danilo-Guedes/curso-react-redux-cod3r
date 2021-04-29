import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle="Cadastro" />
                <Content>
                    Ciclo de Pagamentos
                </Content>
            </div>
        )
    }
}

export default BillingCycle