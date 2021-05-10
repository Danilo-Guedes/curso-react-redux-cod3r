import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { reduxForm, Field } from 'redux-form'
import {connect} from 'react-redux'

import {init} from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props //came from reduxForm
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field
                        name='name'
                        component={LabelAndInput}
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe um nome'
                        type="text"
                    />
                    <Field
                        name='month'
                        component={LabelAndInput}
                        label='Mês'
                        cols='12 4'
                        placeholder='Informe um Mês'
                        type="number"
                    />
                    <Field
                        name='year'
                        component={LabelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informr um ano'
                        type="number"
                    />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
//reduxForm is a function like connect function from react-redux

const MapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);

export default connect(null, MapDispatchToProps)(BillingCycleForm)

