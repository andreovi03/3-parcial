import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) =>{
    const { action, payload} = actions;

    switch (action) {
        case SomeActions.GET_PRODUCT:

            state.products = payload;
            return state;
    
        case SomeActions.SAVE_PRODUCT:
            
            state.products = [...state.products, payload];
            
        default:
            break;
    }
}