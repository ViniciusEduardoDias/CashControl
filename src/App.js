import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'

import Newproject from './components/pages/Newproject'


import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<Newproject />} />
          <Route path="/project/:id" element={<Project />} /> 
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
