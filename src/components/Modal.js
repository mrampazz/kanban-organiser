import React from 'react';
import '../assets/Modal.css';
class Modal extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="modal-outer-container">
   
                <div className="background-dark" onClick={this.props.killModal}>
                </div>
                <div className="modal-bg">
                    CIAO SONO UN MODAL!!!
                </div>
            </div>
        );
    }
}

export default Modal;