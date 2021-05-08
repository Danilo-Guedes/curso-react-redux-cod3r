import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

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
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)

//reduxForm is a function like connect function from react-redux
