import React from 'react';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheck, faWrench } from '@fortawesome/free-solid-svg-icons'
import '../assets/Task.css';
import '../assets/Std.css';
// tutto è ovvio ma nulla è certo

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: '',
            setEditing: false,
            modalActivities: []
        }
    }

    handleEditMode = () => {
        this.setState({setEditing: true});
    }

    handleChangeText = (e) => {
        this.setState({editText: e.target.value});
    }

    handleSubmit = (e) => {
        this.setState({setEditing: false});
        this.props.editTask(this.props.id, this.state.editText);
        e.preventDefault();
    }

    render() {    
        if (this.state.setEditing) {
            return (
                <div className="task-container task-bg" onClick={this.props.showModal}>
                    
                    <div className="header-title-task">
                        <FontAwesomeIcon className="edit-task-button" icon={faCheck} size="1x" onClick={this.handleSubmit}/>
                        <form onSubmit={this.handleSubmit} >
                            <input className="inputTask" placeholder={this.props.title} onChange={this.handleChangeText}></input>
                        </form>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <a className="show-more-link">Show content</a>
                </div>
            );

        } else {
            return (
                <div className="task-container task-bg" onClick={this.props.showModal}>
                    <div className="header-title-task">
                        <FontAwesomeIcon className="edit-task-button" icon={faWrench} size="1x" onClick={this.handleEditMode}/>
                        <h3 className="task-title">{this.props.title}</h3>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <a className="show-more-link">Show content</a>
                </div>
            );
        }



    }
}


export default Task;{}