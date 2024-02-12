// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.js';
import GetStarted from './getstartedcard.js'
import Login from './login.js';
import Profile from './profile.js';
// import Matchcard from './matchcard.js';
import Quiz from './questions.js';
import Match from './match.js';
import Comeback from "./Comeback.js";
function App() {
  return (
    <BrowserRouter>
    {/* <Welcome/> */}
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<GetStarted/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/matchcard' element={<Matchcard/>}/> */}
      <Route path='/questions' element={<Quiz/>}/>
      <Route path='/match' element={<Match/>}/>
      <Route path='/seeyoutommorrow' element={<Comeback/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
