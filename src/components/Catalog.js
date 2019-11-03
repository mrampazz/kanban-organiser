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
            cols: [
                {id:1, txt: "Stash"},
                {id:2, txt: "Open"},
                {id:3, txt: "In progress"},
                {id:4, txt: "Done"}
            ]
        }
    }

    handleDelete = itemId => {
        const objects = this.state.cols.filter(item => item.id !== itemId);
        this.setState({cols: objects});
    };

    handleCreation = () => {
        const objects = this.state.cols;
        const obj = objects[objects.length-1];
        objects.push({id: obj.id + 1, txt: "newCol"});
        this.setState({cols: objects});
    }
    
    render() {
        const items = this.state.cols.map(item => (
            <Column 
                key={item.id} 
                txt={item.txt} 
                id={item.id}
                onDelete={this.handleDelete}
            />
        ));
        return (
            <div className="catalog-container">
                <a id="anchor"></a>
                {items}
                <FontAwesomeIcon className="add-button-col" icon={faPlusCircle} size="2x" onClick={this.handleCreation}/>
                <a href="#anchor">Go back</a>
            </div>
        );
    }
}

export default Catalog;