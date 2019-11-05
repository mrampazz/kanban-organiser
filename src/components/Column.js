import React from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle, faWrench, faCheck } from '@fortawesome/free-solid-svg-icons'
import '../assets/Column.css';
import '../assets/Std.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Column extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            editText: '',
            setEditing: false,
            tasks: []
        }
    }

    filterArray = taskId => {
        const objects = this.props.taskArray.filter(item => item.colID === taskId);
        return objects;
    }

    handleEditMode = () => {
        this.setState({setEditing: true});
    }

    handleChange = (e) => {
        this.setState({editText: e.target.value});
    }

    handleSubmit = (e) => {
        this.setState({setEditing: false}); 
        this.props.onEdit(this.props.id, this.state.editText);
        e.preventDefault();
    }

    render() { 
        const filteredItems = this.filterArray(this.props.id).map(item => (
            <Task 
                key = {item.id}
                id = {item.id}
                colID = {this.props.id}
                title = {item.title}
                deleteTask = {this.props.onDeleteTask}
            />
        ))
           
        var headerClass = ["column-header"];
        var contentClass = ["column-content"];
        if(this.props.id % 2 === 0) {
            contentClass.push('content-bg1');
            headerClass.push('header-bg-1');
        } else {
            contentClass.push('content-bg2');
            headerClass.push('header-bg-2');
        }
        if(this.state.setEditing) {
            return (
                <div className="column text-color">
                    <div className={headerClass.join(' ')}>
                        <div className="header-title">
                            <form onSubmit={this.handleSubmit} >
                                <FontAwesomeIcon className="edit-button" icon={faCheck} onClick={this.handleSubmit}></FontAwesomeIcon>
                                <input className="title input-text" placeholder={this.props.txt} onChange={this.handleChange}></input>
                            </form>
                        </div>
                        <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDeleteCol(this.props.id)} />
                    </div>
                    <div className={contentClass.join(' ')}>
                        <ReactCSSTransitionGroup
                            transitionName="taskRemove"
                            transitionEnter={true}
                            transitionLeave={true}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}    
                        >
                        {filteredItems}
                        </ReactCSSTransitionGroup>
                        <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x" onClick={() => this.props.onCreateTask(this.props.id)}></FontAwesomeIcon>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="column text-color">
                    <div className={headerClass.join(' ')}>
                        <div className="header-title">
                            <FontAwesomeIcon className="edit-button" icon={faWrench} onClick={this.handleEditMode}></FontAwesomeIcon>
                            <h2 className="title">{this.props.txt}</h2>                    
                        </div>
                        <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDeleteCol(this.props.id)} />
                    </div>
                    <div className={contentClass.join(' ')}>
                        <ReactCSSTransitionGroup
                            transitionName="taskRemove"
                            transitionEnter={true}
                            transitionLeave={true}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}    
                        >
                        {filteredItems}
                        </ReactCSSTransitionGroup>
                        <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x" onClick={() => this.props.onCreateTask(this.props.id)}></FontAwesomeIcon>
                    </div>
                </div>
            );
        }
    }
}

export default Column; 