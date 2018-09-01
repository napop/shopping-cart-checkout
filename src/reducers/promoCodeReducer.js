import { PROMO_CODE } from '../actions/types';

const initiaState = {
    open: false,
    value: ''
};

export default function(state = initiaState, action){
    switch(action.type) {
        case PROMO_CODE:
            return {
                ...state,
                value: action.payload
            };
            default:
                return state;
    }
}