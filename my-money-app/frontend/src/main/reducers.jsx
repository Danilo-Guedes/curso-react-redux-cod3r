import { combineReducers, CombineReducers } from 'redux'
import DashboarReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer'
import BilligCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboarReducer,
    tab: TabReducer,
    billingCycle: BilligCycleReducer
})

export default rootReducer