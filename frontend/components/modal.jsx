import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
 
const msp = (state) => {
    return{
        modal: state.modal
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.modal){
            return null; 
        }
        let component;
        switch(this.props.modal){
            case 'login': 
                component = <LoginFormContainer/>;
                break;
            
            case 'signup': 
                component = <SignupFormContainer/>;
                break;
            default:
                return null; 
        }
        return(
            <div className='modal-background' onClick={this.props.closeModal}>
                <div className='modal-child' onClick={e=> e.stopPropagation()}>
                    { component }
                </div>
            </div>
        );
    }

}

export default connect(msp, mdp)(Modal);


