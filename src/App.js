
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login'
import Reg from './pages/register'
import Chat from './pages/home_chat'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/chat" index
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
