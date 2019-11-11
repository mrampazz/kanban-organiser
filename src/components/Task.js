import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faCheck, faWrench, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import '../assets/Task.css';
import '../assets/Std.css';
import Dropdown from './Dropdown';
// tutto è ovvio ma nulla è certo
//  onClick={this.props.showModal}

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: '',
            setEditing: false,
            modalActivities: [],
            isDropdownOpen: false
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
        let i = e.target.textContent.match(/(\d+)/);
        this.props.moveTask(this.props.id, parseInt(i, 10));
    }

    handleToggleDropdown = () => {
        if (this.state.isDropdownOpen) {
            this.setState({isDropdownOpen: false});
        } else {
            this.setState({isDropdownOpen: true});
        }
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
                        <FontAwesomeIcon icon={faEllipsisH} onClick={this.handleToggleDropdown}/>
                        <form onSubmit={this.handleSubmit} >
                            <input className="inputTask" placeholder={this.props.title} onChange={this.handleChangeText}></input>
                        </form>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <Dropdown
                        handleMoveTask = {this.handleMoveTask}
                        colList = {this.props.colArray}
                        isOpen = {this.state.isDropdownOpen}
                    />
                    <a className="show-more-link">Show content</a>
                </div>
            );

        } else {
            return (
                <div className="task-container task-bg">
                    <div className="header-title-task">
                        <FontAwesomeIcon className="edit-task-button" icon={faWrench} size="1x" onClick={this.handleEditMode}/>
                        <FontAwesomeIcon icon={faEllipsisH} onClick={this.handleToggleDropdown}/>
                        <h3 className="task-title">{this.props.title}</h3>
                        <FontAwesomeIcon className="close-task-button" icon={faTimesCircle} size="2x" onClick={() => this.props.deleteTask(this.props.id)}/>
                    </div>
                    <Dropdown
                        handleMoveTask = {this.handleMoveTask}
                        colList = {this.props.colArray}
                        isOpen = {this.state.isDropdownOpen}
                    />
                    <a className="show-more-link">Show content</a>
                </div>
            );
        }



    }
}


export default Task;{}