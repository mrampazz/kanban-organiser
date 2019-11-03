import React from 'react';
import Column from './Column';
import '../assets/Catalog.css';
import '../assets/Std.css';

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
                {items}
            </div>
        );
    }
}

export default Catalog;