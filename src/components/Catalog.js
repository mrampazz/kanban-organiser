import React from 'react';
import Column from './Column';


const cols = [
    {id:1, txt: "Stash"},
    {id:2, txt: "Open"},
    {id:3, txt: "In progress"},
    {id:4, txt: "Done"}
];

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: cols
        }
        this.listCols = this.state.cols.map(asd => (
            <Column pippo={this.state.cols} key={this.state.cols.id} txt={this.state.cols.txt} removeCol={this.removeCol.bind(this)}></Column>
        ));
    }

    removeCol(id) {
        const newState = this.state;
        const indx = newState.cols.findIndex(col => col.id === id);
        if(indx === -1) return;
        newState.cols.splice(indx, 1);
        this.setState(newState);
    }
    
    render() {
 
        return (
            <div> 
                {this.listCols}
            </div>
        );
    }
}

export default Catalog;