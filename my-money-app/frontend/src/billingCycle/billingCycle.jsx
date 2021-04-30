import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader
                    title='Ciclos de Pagamentos'
                    subtitle='Cadastro'
                />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label='Listar'
                                icon='bars'
                                target='tabList'
                            />
                            <TabHeader
                                label='Incluir'
                                icon='plus'
                                target='tabCreate'
                            />
                            <TabHeader
                                label='Alterar'
                                icon='pencil'
                                target='tabUpdate'
                            />
                            <TabHeader
                                label='Excluir'
                                icon='trash-o'
                                target='tabDelete'
                            />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><div>Listar</div></TabContent>
                            <TabContent id='tabCreate'><div>Incluir</div></TabContent>
                            <TabContent id='tabUpdate'><div>Alterar</div></TabContent>
                            <TabContent id='tabDelete'><div>Excluir</div></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle
