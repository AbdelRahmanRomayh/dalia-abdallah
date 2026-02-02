import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import ProjectDetailV2 from './pages/ProjectDetailV2'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="w-full max-w-full md:max-w-app mx-auto">
          <Navbar />
        </div>
        <main className="flex-grow w-full max-w-full md:max-w-app mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/project-detail-v2/:id" element={<ProjectDetailV2 />} />
          </Routes>
        </main>
        <div className="w-full max-w-full md:max-w-app mx-auto">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
