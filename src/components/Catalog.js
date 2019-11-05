import React from 'react';
import Column from './Column';
import '../assets/Catalog.css';
import '../assets/Std.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyArray: true,
            cols: [],
            tasks: []
        }
    }

    handleDelCol = itemId => {
        const objects = this.state.cols.filter(item => item.id !== itemId);
        if(objects.length == 0) {
            this.setState({cols: objects, emptyArray: true});
        } else {
            this.setState({cols: objects});
        }
    }

    handleCreateCol = () => {
        const objects = this.state.cols;
        if(objects.length == 0) {
            objects.push({id: 1, txt: "newCol"});
        } else {
            if (this.state.cols.length < 4) {
                const obj = objects[objects.length-1];
                objects.push({id: obj.id + 1, txt: "newCol"});
                
            }
        }
        objects.length = Math.min(objects.length, 4);  

        this.setState({cols: objects, emptyArray: false});
    }

    handleEditCol = (itemId, newText) => {
        const objects = this.state.cols.slice();
        for (let i=0; i<objects.length; i++) {
            if (itemId == i+1) {
                objects[i].txt = newText;
            }
        }
        this.setState({cols: objects});
    }

    handleDeleteTask = taskId => {
        const objects = this.state.tasks.filter(item => item.id !== taskId);
        this.setState({tasks: objects});
    }

    handleCreateTask = colId => {
        const objects = this.state.tasks;

        if(objects.length == 0) {
            objects.push({colID: colId, id: 1, title: "asd"});
        } else {
            const obj = objects[objects.length-1];
            objects.push({colID: colId, id: obj.id+1, title: "asd"});
        }

        this.setState({tasks: objects});
    }
    
    render() {

        if (this.state.emptyArray == true) {
            return (
                <div className="empty-state">
                    <h1>Click this button to start creating the columns!</h1>
                    <FontAwesomeIcon className="add-button-col-empty" icon={faPlusCircle} size="2x" onClick={this.handleCreateCol}/>
                </div>
            );
        } else {
        const items = this.state.cols.map(item => (
            <Column 
                key={item.id} 
                txt={item.txt} 
                id={item.id}
                onDeleteCol={this.handleDelCol}
                onCreateTask={this.handleCreateTask}
                onDeleteTask={this.handleDeleteTask}
                onEdit={this.handleEditCol}
                taskArray = {this.state.tasks}
            />
        ));
        
        return (
            <div className="catalog-container">
                <ReactCSSTransitionGroup
                    transitionName="colRemove"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}    
                >
                {items}
                </ReactCSSTransitionGroup>
                <FontAwesomeIcon className="add-button-col" icon={faPlusCircle} size="2x" onClick={this.handleCreateCol}/>
            </div>
        );
    }
    }
}

export default Catalog;
