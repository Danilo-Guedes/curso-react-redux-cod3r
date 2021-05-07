import { combineReducers, CombineReducers } from 'redux'
import DashboarReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer'
import BilligCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
    dashboard: DashboarReducer,
    tab: TabReducer,
    billingCycle: BilligCycleReducer,
    form: FormReducer
})

export default rootReducer