import merge from 'lodash/merge';

import { 
    RECEIVE_ALL_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT,
} from '../actions/product_actions';

const productsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product };
            return merge({}, state, newProduct)

        case REMOVE_PRODUCT:
            // TODO: remove item from state 
            return;
        
        default:
            return state;
    }
}

export default productsReducer;