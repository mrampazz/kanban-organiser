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
            cols: []
        }
    }

    handleDelete = itemId => {
        const objects = this.state.cols.filter(item => item.id !== itemId);
        if(objects.length == 0) {
            this.setState({cols: objects, emptyArray: true});
        } else {
            this.setState({cols: objects});
        }
    }

    handleCreation = () => {
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
    
    render() {

        if (this.state.emptyArray == true) {
            return (
                <div className="empty-state">
                    <h1>Click this button to start creating the columns!</h1>
                    <FontAwesomeIcon className="add-button-col-empty" icon={faPlusCircle} size="2x" onClick={this.handleCreation}/>
                </div>
            );
        } else {
        const items = this.state.cols.map(item => (
            <Column 
                key={item.id} 
                txt={item.txt} 
                id={item.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEditCol}
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
                <FontAwesomeIcon className="add-button-col" icon={faPlusCircle} size="2x" onClick={this.handleCreation}/>
            </div>
        );
    }
    }
}

export default Catalog;
