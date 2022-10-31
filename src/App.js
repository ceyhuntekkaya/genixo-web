import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Methodology from "./pages/Methodology";
import AboutUs from "./pages/AboutUs";
import ConfidentialityAgreement from "./pages/ConfidentialityAgreement";
import BlogList from "./pages/BlogList";
import BlogSingle from "./pages/BlogSingle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/confidentiality-agreement"
          element={<ConfidentialityAgreement />}
        />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/methodology" element={<Methodology />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about-us" element={<AboutUs />} />

        <Route exact path="/blog-list" element={<BlogList />} />
        <Route exact path="/blog-reading" element={<BlogSingle />} />


        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
