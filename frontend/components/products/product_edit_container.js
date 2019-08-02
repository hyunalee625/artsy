import { updateProduct, fetchProduct, deleteProduct } from '../../actions/product_actions';
import { connect } from 'react-redux';
import ProductForm from './product_form';

const msp = (state, ownProps) => {
    const defaultPost = {
        id: '',
        title: '',
        description: '',
        price: '',
        who: '',
        what: '',
        when: '',
        user_id: state.session.id,
        imgUrl: ''

    }
    let product = state.entities.products[ownProps.match.params.productId] || defaultProduct;
    return {
        product,
        formType: 'update',
        errors: state.errors.products,
        userId: state.session.id 
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(ProductForm); 