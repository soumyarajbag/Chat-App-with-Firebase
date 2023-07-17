
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);
   
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children ;
  }
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/register' element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
