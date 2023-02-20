import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Search from "./components/pages/Search";
import VetHome from "./components/pages/VetProfile/VetHome";
import OwnerHome from "./components/pages/OwnerProfile/OwnerHome";


import './App.css';

function App() {
  return (
   <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/SignUp" element={<SignUp />} />
        <Route path="pages/SignIn" element={<SignIn />} />
        <Route path="pages/Search" element={<Search />} />
        <Route path="pages/VetProfile/Home" element={<VetHome />} />
        <Route path="pages/OwnerProfile/Home" element={<OwnerHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
