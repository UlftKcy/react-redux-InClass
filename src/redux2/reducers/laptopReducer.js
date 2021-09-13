import {SELL_LAPTOP,SELL_PHONE,SELL_WATCH,SELL_COMP} from "../types/types";
const initialState = {
    numberOfLaptops : 100
}
const laptopReducer = (state=initialState,action) => {
    switch (action.type) {
        case SELL_LAPTOP:
            return {
                ...state,
                numberOfLaptops : state.numberOfLaptops-action.payload
            }
        default:
            return state;
    }
}
export default laptopReducer;