import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import UploadPage from "./pages/Upload";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import MemePost from "./pages/MemePage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meme/:id" element={<MemePost />} />
      </Routes>
    </BrowserRouter>
  );
}
