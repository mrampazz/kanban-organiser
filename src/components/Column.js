
import React from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../assets/Column.css';
import '../assets/Std.css';
import { is } from '@babel/types';

class Column extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            showInput: false
        }
    }
    
    render() {
        let contentClass = ["column-content"];
        if(this.props.id % 2 === 0) {
            contentClass.push('content-bg1');
        } else {
            contentClass.push('content-bg2');
        }
        return (
            <div className="column text-color">
                <div className="column-header header-bg">
                    <h2 className="title">{this.props.txt}</h2>
                    <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDelete(this.props.id)} />
                </div>
                <div className={contentClass.join(' ')}>
                    <Task />
                    <Task />
                    <Task />
                    <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x"></FontAwesomeIcon>
                </div>
            </div>
        );
    }
}

export default Column; 