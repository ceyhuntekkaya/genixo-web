import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import TeamMember from './pages/our-team/TeamMember';
import OurTeam from './pages/our-team/OurTeam';
import AboutUs from './pages/about-us/AboutUs';
import AboutUs2 from './pages/about-us/AboutUs2';
import Service from './pages/services/Service';
import Service2 from './pages/services/Service2';
import Faq from './pages/faq/Faq';
import Error from './pages/error/Error';

import AdvisoryServices from './pages/departments/AdvisoryServices';
import ContentEngineering from './pages/departments/ContentEngineering';
import DataStructuring from './pages/departments/DataStructuring';
import DijitalService from './pages/departments/DijitalService';
import Experience from './pages/departments/Experience';
import ItConsultancy from './pages/departments/ItConsultancy';
import Project from './pages/project/Project';
import Portfolio from './pages/project/Portfolio';

import Blog from './pages/blog/Blog';
import BlogGrid from './pages/blog/BlogGrid';
import BlogSingle from './pages/blog/BlogSingle';
import ContactUs from './pages/contact-us/ContactUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/bloglist" element={<Blog />} />
        <Route exact path="/bloggrid" element={<BlogGrid />} />
        <Route exact path="/blogsingle" element={<BlogSingle />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/consultancy" element={<ItConsultancy />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/digital" element={<DijitalService />} />
        <Route exact path="/data" element={<DataStructuring />} />
        <Route exact path="/advisory" element={<AdvisoryServices />} />
        <Route exact path="/content" element={<ContentEngineering />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/service2" element={<Service2 />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/about2" element={<AboutUs2 />} />
        <Route exact path="/team" element={<OurTeam />} />
        <Route exact path="/teammember" element={<TeamMember />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
