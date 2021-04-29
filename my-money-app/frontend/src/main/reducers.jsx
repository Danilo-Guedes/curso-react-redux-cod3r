import { combineReducers, CombineReducers } from 'redux'
import DashboarReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    dashboard: DashboarReducer
})

export default rootReducer