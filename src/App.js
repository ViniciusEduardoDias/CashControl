import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contact'
import Newproject from './components/pages/Newproject'
import Empresa from './components/pages/Company'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Container from './components/layout/Container'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<Newproject />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} /> 
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
