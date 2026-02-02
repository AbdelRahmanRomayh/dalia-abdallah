function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-[95%] mx-auto border-t border-black">
      <div className="w-full px-4 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        {/* Left side - Name and year */}
        <div className="text-black font-sans text-sm md:text-base">
          <span className="font-bold">dalia</span>
          <span> abdalla | {currentYear}</span>
        </div>

        {/* Right side - Social links */}
        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-black font-sans text-xs md:text-sm">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            linkedin
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            instagram
          </a>
          <a 
            href="https://behance.net" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            behance
          </a>
          <a 
            href="mailto:contact@example.com"
            className="hover:opacity-70 transition-opacity"
          >
            let's talk
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
