const INIT_STATE = {
    roleData:[],
}
import {DATA} from '../../Redux-store/type'
export default (state = INIT_STATE, action) =>{
    switch("data") {
        case DATA : 
            return {...state,roleData:action.payload};

        default:
            return state;
    }
}