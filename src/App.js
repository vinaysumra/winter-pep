import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  let [arr,setArr] = useState([]);
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/FormAction' element={
        <FormAction setArr={setArr}/>
        }>
        </Route>

        <Route exact path='/Home' element={
        <Home arr={arr}/>
        }>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;
