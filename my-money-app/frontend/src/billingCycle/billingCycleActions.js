import axios from 'axios'
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
    const request = axios.post(`${URL}/billingCycles`, values)
    return {
        type: 'BILLING_CYCLE_CREATED',
        payload: request
        
    }
}