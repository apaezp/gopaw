import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Search from "./components/pages/Search";
import VetHome from "./components/pages/VetProfile/VetHome";
import VetPublicProfile from "./components/pages/VetProfile/VetPublicProfile";
import VetPrivateProfile from "./components/pages/VetProfile/VetPrivateProfile";
import OwnerPrivateProfile from "./components/pages/OwnerProfile/OwnerPrivateProfile";
import { AuthProvider } from "./GlobalStates";

import "./App.css";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import ContactPage from "./components/pages/ContactPage";
import ContactInfo from "./components/pages/ContactInfo";
import ContactHelp from "./components/pages/ContactHelp";
import Appointment from "./components/pages/OwnerProfile/Appointment"
import Review from "./components/pages/OwnerProfile/Review"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pages/SignUp" element={<SignUp />} />
            <Route path="pages/Login" element={<Login />} />
            <Route path="pages/Search" element={<Search />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/ContactInfo" element={<ContactInfo />} />
            <Route path="/ContactHelp" element={<ContactHelp />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Review/:id" element={<Review />} />

            <Route path="pages/VetProfile/VetHome" element={<VetHome />} />
          
            <Route
              path="pages/VetProfile/VetPublicProfile"
              element={<VetPublicProfile />}
            />
            <Route
              path="pages/VetProfile/VetPrivateProfile"
              element={<VetPrivateProfile />}
            />
            <Route
              path="pages/OwnerProfile/OwnerPrivateProfile"
              element={<OwnerPrivateProfile />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
