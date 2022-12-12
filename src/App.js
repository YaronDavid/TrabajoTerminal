import './App.css';
import ListExercises from './components/ListExercises';
import Index2 from './components/Index2';
import UpdateExercise from './components/UpdateExercise';
import React from "react";
import NavBar from './components/NavBar';
import CreateExercise from './components/CreateExercise';
import OneExercise from './components/OneExercise';
import SolveExercise from './components/SolveExercise';
import Login from './components/Login';
import Home from './components/Home';
import Registro from './components/Registro';
import Header from './components/Header';
import Footer from './components/Footer';
import Grupo from './components/Grupo';
import Temas from './components/Temas';
import Sistemas from './components/Sistemas';
import MyGroups from './components/MyGroups';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Metodo from './components/Metodo';
import Pasos from './components/Pasos';
import NewGroup from './components/NewGroup';
import CambiarContraseña from './components/CambiarContraseña';




function App() {
  return (
    <div>
      <Router>
          <NavBar/>            
            <Routes>
              <Route path='/' exact element = {<Index2/>}></Route>
              <Route path='/exercises' element = {<ListExercises/>}></Route>
              <Route path='/exercise/:id' element = {<OneExercise/>}></Route>
              <Route path='/add-exercise' element = {<CreateExercise/>}></Route>
              <Route path='/update-exercise/:id' element = {<UpdateExercise/>}></Route>
              <Route path='/solve-exercise/:id' element = {<SolveExercise/>}></Route>
              <Route path='/login' element = {<Login/>}></Route>
              <Route path='/home' element = {<Home/>}></Route>
              <Route path='/registro' element = {<Registro/>}></Route>
              <Route path='/grupo' element = {<Grupo/>}></Route>
              <Route path='/temas' element = {<Temas/>}></Route>
              <Route path='/sistemas' element = {<Sistemas/>}></Route>
              <Route path='/metodo' element = {<Metodo/>}></Route>
              <Route path='/myGroups' element = {<MyGroups/>}></Route>
              <Route path='/pasos' element = {<Pasos/>}></Route>
              <Route path='/crearGrupo' element = {<NewGroup/>}></Route>
              <Route path='/restablecer' element = {<CambiarContraseña/>}></Route>
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
