import React, { Component } from 'react'
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {
    renderRows() {
        return (
            <tr>
                <td>
                    <Field
                        name='credits[0].name'
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly}
                    ></Field>
                </td>
                <td>
                    <Field
                        name='credits[0].value'
                        component={Input}
                        placeholder='informe o valor'
                        readOnly={this.props.readOnly}
                    ></Field>
                </td>
                <td></td>
            </tr>
        )
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nomes</th>
                                <th>Valor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderRows()}</tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList
