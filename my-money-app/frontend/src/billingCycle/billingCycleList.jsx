import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './billingCycleActions'

import If from '../common/operator/if'

class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button
                        className='btn btn-warning'
                        onClick={() => this.props.showUpdate(bc)}
                    >
                        <i className='fa fa-pencil'></i>
                    </button>
                    {/* <button className='btn btn-danger'>
                        <i className='fa fa-trash'></i>
                    </button> */}
                </td>
            </tr>
        ))
    }

    render() {
        const list = this.props.list !== []
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}

                        {/* {         #######   MINHA SOLUCAO ANTES DE VER A RESPOSTA   
                            this.props.list.map(e => ( 
                             <tr key={e._id}>
                                 <td>{e.name}</td>
                                 <td>{e.month}</td>
                                 <td>{e.year}</td>
                             </tr>
                         ))} */}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
