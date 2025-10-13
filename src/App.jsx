import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Booking from './pages/Booking'
import AdminDashboard from './pages/AdminDashboard'
import TestConnection from './components/TestConnection'

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/agendamento" element={<Booking />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/test" element={<TestConnection />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App