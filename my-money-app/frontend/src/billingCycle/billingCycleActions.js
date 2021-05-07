import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const URL = 'http://localhost:3003/api'

export const getList = () => {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    // const texto = console.log(values);
    axios.post(`${URL}/billingCycles`, values)
    .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
    })
    .catch(e =>{
        e.response.data.errors.forEach(erro => {
            toastr.error('Erro', erro)
        })
    })
    return {
        type: 'TEMP'   
        
    }
}