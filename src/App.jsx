import { Button } from "@/components/ui/button"
import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import MyAccount from "./pages/myAccount";
import Assignments from "./pages/assignments";
import Footer from "./components/footer";
import Project from "./pages/projects";
import CareerPage from "./pages/careerPortal";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="assignments" element={<Assignments/>}/>
        <Route path="projects" element={<Project/>}/>
        <Route path="account/*" element={<MyAccount/>}/>
        <Route path="career" element={<CareerPage/>}/>
      </Routes>
    </>
  )
}

export default App
