import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting'; 

const msp = ({ session }) => {

    return {
        id: session.id
    };
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Greeting);