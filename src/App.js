import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from './components/ScrollToTop';
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Search from "./components/pages/Search";
import VetHome from "./components/pages/VetProfile/VetHome";
import OwnerHome from "./components/pages/OwnerProfile/OwnerHome";
import OwnerPublicProfile from "./components/pages/OwnerProfile/OwnerPublicProfile";

import './App.css';
import VetPublicProfile from "./components/pages/VetProfile/VetPublicProfile";

function App() {
  return (
   <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/SignUp" element={<SignUp />} />
        <Route path="pages/Login" element={<Login />} />        
        <Route path="pages/Search" element={<Search />} />
        <Route path="pages/VetProfile/VetHome" element={<VetHome />} />
        <Route path="pages/VetProfile/VetPublicProfile" element={<VetPublicProfile />} />
        <Route path="pages/OwnerProfile/OwnerHome" element={<OwnerHome />} />
        <Route path="pages/OwnerProfile/OwnerPublicProfile" element={<OwnerPublicProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
