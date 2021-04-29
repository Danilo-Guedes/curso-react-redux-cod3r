import axios from 'axios'
const URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request,
    }
}
