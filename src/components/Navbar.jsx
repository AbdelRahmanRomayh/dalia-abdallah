import { Link } from 'react-router-dom'
import linkedinIcon from '../assets/linkedin.svg'
import behanceIcon from '../assets/behance.svg'

function Navbar() {
  return (
    <nav className="w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center">
      <Link to="/" className="text-xl md:text-2xl font-sans flex flex-col">
        <span className="text-teal-light font-semibold">dalia</span>
        <span className="text-teal-light">abdalla</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/" className="text-sm md:text-[17px] text-gray-800 hover:text-gray-600 transition-colors">
          work
        </Link>
        <Link to="/about" className="text-sm md:text-[17px] text-gray-800 hover:text-gray-600 transition-colors">
          about
        </Link>
        <div className="flex gap-2 md:gap-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-5 h-5 hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
          </a>
          <a 
            href="https://behance.net" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-5 h-5 hover:opacity-70 transition-opacity"
            aria-label="Behance"
          >
            <img src={behanceIcon} alt="Behance" className="w-full h-full" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

