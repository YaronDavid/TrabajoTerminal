import './App.css';
import ListExercises from './components/ListExercises';
import Index2 from './components/Index2';
import UpdateExercise from './components/UpdateExercise';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import CreateExercise from './components/CreateExercise';
import OneExercise from './components/OneExercise';
import SolveExercise from './components/SolveExercise';
import Login from './components/Login';
import Home from './components/Home';



function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <NavBar/>
          <div className='container'>
          <Routes>
              <Route path='/' exact element = {<Index2/>}></Route>
              <Route path='/exercises' element = {<ListExercises/>}></Route>
              <Route path='/exercise/:id' element = {<OneExercise/>}></Route>
              <Route path='/add-exercise' element = {<CreateExercise/>}></Route>
              <Route path='/update-exercise/:id' element = {<UpdateExercise/>}></Route>
              <Route path='/solve-exercise/:id' element = {<SolveExercise/>}></Route>
              <Route path='/login' element = {<Login/>}></Route>
              <Route path='/home' element = {<Home/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
