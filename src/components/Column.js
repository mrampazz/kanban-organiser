
import React from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import '../assets/Column.css';
import '../assets/Std.css';

class Column extends React.Component { 
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
                    <Task />
                    <Task />
                    <Task />    
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        );
    }
}

export default Column; 