import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/"  element={<Welcome/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;