import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projectData.js'

function Home() {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="w-full px-4 md:px-8 py-6 md:py-12">
        {/* Introductory Section */}
        <div className="mb-8 md:mb-16 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold font-sans text-gray-800 max-w-full md:max-w-[691px] mx-auto px-4">
            Multidisciplinary designer Dalia Abdalla brings her world to life through 
            whimsical letters, vibrant musical inspiration, and charming floral patterns.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.titleBody.title}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

