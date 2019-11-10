import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheck, faWrench } from '@fortawesome/free-solid-svg-icons'
import '../assets/Task.css';
import '../assets/Std.css';
// tutto è ovvio ma nulla è certo
//  onClick={this.props.showModal}

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

    handleMoveTask = (e) => {
        this.props.moveTask(this.props.id, parseInt(e.target.textContent, 10));
    }

    render() {    
        const items = this.props.colArray.map(item => (
            <li key = {item.id} onClick={e => this.handleMoveTask(e, "value")}>{item.id}</li>
        ));
        
        if (this.state.setEditing) {
            return (
                <div className="task-container task-bg" >
                    <div className="header-title-task">
                        <FontAwesomeIcon className="edit-task-button" icon={faCheck} size="1x" onClick={this.handleSubmit}/>
                        <form onSubmit={this.handleSubmit} >
                            <input className="inputTask" placeholder={this.props.title} onChange={this.handleChangeText}></input>
                        </form>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <ul>
                        {items}
                    </ul>
                    <a className="show-more-link">Show content</a>
                </div>
            );

        } else {
            return (
                <div className="task-container task-bg">
                    <div className="header-title-task">
                        <FontAwesomeIcon className="edit-task-button" icon={faWrench} size="1x" onClick={this.handleEditMode}/>
                        <h3 className="task-title">{this.props.title}</h3>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <ul>
                        {items}
                    </ul>
                    <a className="show-more-link">Show content</a>
                </div>
            );
        }



    }
}


export default Task;{}