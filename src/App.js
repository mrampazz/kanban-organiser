import React from 'react';
import logo from './logo.svg';
import './App.css';

// importing components
import Catalog from './components/Catalog';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Catalog />
      </div>
    );
  }
}

export default App;
