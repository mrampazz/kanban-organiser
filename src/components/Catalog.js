import React from 'react';
import Column from './Column';
import '../assets/Catalog.css';
import '../assets/Std.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: []
        }
    }

    handleDelete = itemId => {
        const objects = this.state.cols.filter(item => item.id !== itemId);
        this.setState({cols: objects});
    };

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

        this.setState({cols: objects});
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
        const items = this.state.cols.map(item => (
            <Column 
                key={item.id} 
                txt={item.txt} 
                id={item.id}
                onDelete={this.handleDelete}
                onEdit={this.handleEditCol}
            />
        ));
        items.length = Math.min(items.length, 4);
        return (
            <div className="catalog-container">
                {items}
                <FontAwesomeIcon className="add-button-col" icon={faPlusCircle} size="2x" onClick={this.handleCreation}/>
            </div>
        );
    }
}

export default Catalog;
