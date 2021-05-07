import { combineReducers, CombineReducers } from 'redux'
import DashboarReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer'
import BilligCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as FormReducer } from 'redux-form'
import {reducer as ToasterReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    dashboard: DashboarReducer,
    tab: TabReducer,
    billingCycle: BilligCycleReducer,
    form: FormReducer,
    toastr: ToasterReducer
})

export default rootReducer