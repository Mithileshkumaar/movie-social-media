
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Reg from './pages/register'
import Chat from './pages/home_chat'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/chat" element={<Chat />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
