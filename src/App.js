import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/Std.css';
// importing components
import Catalog from './components/Catalog';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onDragEnd = () => {

  }

  render() {
    return (
      <DragDropContext
        onDragEnd = {this.onDragEnd}
      >
        <div className="App">
          <Catalog />
        </div>
      </DragDropContext>
    );
  }
}



export default App;
