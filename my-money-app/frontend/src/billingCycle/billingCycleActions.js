import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export const getList = () => {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request,
    }
}

export function create(values) {
    // const texto = console.log(values);

    return dispatch => {
        axios
            .post(`${URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })

            .catch(e => {
                e.response.data.errors.forEach(erro => {
                    toastr.error('Erro', erro)
                })
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle),
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ]
}
