import React from 'react'
import Array from './components/Array';
import BST from './components/BST';
import Stack from './components/Stack';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path='Stack'><Stack/></Route>
        <Route path='Array'><Array/></Route>
        <Route path='BST'><BST/></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
