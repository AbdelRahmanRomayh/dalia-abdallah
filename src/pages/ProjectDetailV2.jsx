import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import projectData from '../data/projectData.js'

function ProjectDetailV2() {
  const { id } = useParams()
  
  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])
  
  // Find project by id, default to first project if not found
  const project = projectData.find(p => p.id === parseInt(id)) || projectData[0]
  
  // Calculate next and previous project IDs from the array
  const currentIndex = projectData.findIndex(p => p.id === parseInt(id))
  const nextProjectId = currentIndex !== -1 && currentIndex < projectData.length - 1 
    ? projectData[currentIndex + 1].id 
    : null
  const previousProjectId = currentIndex !== -1 && currentIndex > 0 
    ? projectData[currentIndex - 1].id 
    : null
  
  // Get next and previous project objects (for future use)
  const nextProject = nextProjectId ? projectData.find(p => p.id === nextProjectId) : null
  const previousProject = previousProjectId ? projectData.find(p => p.id === previousProjectId) : null

  return (
    <div className="min-h-screen bg-white max-w-full md:max-w-[calc(100%-370px)] mx-auto px-4 md:px-0">
      <div className="w-full px-4 md:px-8 py-6 md:py-12">
        {/* Main Image - Full Width */}
        <div className="mb-8 md:mb-[73px]">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[562px] bg-transparent flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.titleBody.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Title and Body Section */}
        <div className="mb-8 md:mb-[73px] max-w-full md:max-w-[490px]">
          <h1 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
            {project.titleBody.title}
          </h1>
          <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed">
            {project.titleBody.body}
          </p>
        </div>

        {/* Second Image - Full Width */}
        <div className="mb-8 md:mb-[73px]">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[562px] bg-transparent flex items-center justify-center overflow-hidden">
            {project.image2 ? (
              <img 
                src={project.image2} 
                alt={project.titleBody.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Additional Body Text */}
        <div className="mb-8 md:mb-[73px]">
          <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed">
            {project.body2}
          </p>
        </div>

        {/* Two Images Side by Side */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-[54px] w-full mb-8 md:mb-0">
          {/* Left Image */}
          <div className="w-full md:flex-1 h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageLeft ? (
              <img 
                src={project.imageLeft} 
                alt={`${project.titleBody.title} - Left`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          {/* Right Image */}
          <div className="w-full md:flex-[0.45] h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageRight ? (
              <img 
                src={project.imageRight} 
                alt={`${project.titleBody.title} - Right`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Third Body Text */}
        <div className="mb-8 md:mb-[73px] mt-8 md:mt-[73px]">
          <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed">
            {project.body3}
          </p>
        </div>

        {/* Two Images Side by Side - Reversed */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-[54px] w-full mb-8 md:mb-0">
          {/* Left Image */}
          <div className="w-full md:flex-[0.45] h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageRight2 ? (
              <img 
                src={project.imageRight2} 
                alt={`${project.titleBody.title} - Left`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          {/* Right Image */}
          <div className="w-full md:flex-1 h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageLeft2 ? (
              <img 
                src={project.imageLeft2} 
                alt={`${project.titleBody.title} - Right`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Fourth Body Text */}
        <div className="mb-8 md:mb-[73px] mt-8 md:mt-[73px]">
          <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed">
            {project.body4}
          </p>
        </div>

        {/* Third Image - Full Width */}
        <div className="mb-8 md:mb-[73px]">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[562px] bg-transparent flex items-center justify-center overflow-hidden">
            {project.image3 ? (
              <img 
                src={project.image3} 
                alt={project.titleBody.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Two Images Side by Side - Second Pair */}
        <div className="mb-8 md:mb-[73px] flex flex-col md:flex-row gap-4 md:gap-[54px] w-full">
          {/* Left Image */}
          <div className="w-full md:flex-[0.45] h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageRight3 ? (
              <img 
                src={project.imageRight3} 
                alt={`${project.titleBody.title} - Left 2`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          {/* Right Image */}
          <div className="w-full md:flex-1 h-[250px] sm:h-[300px] md:h-[397px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
            {project.imageLeft3 ? (
              <img 
                src={project.imageLeft3} 
                alt={`${project.titleBody.title} - Right 2`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Second Title and Body Section */}
        <div className="mb-8 md:mb-[73px] max-w-full md:max-w-[490px]">
          <h1 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
            {project.titleBody2.title}
          </h1>
          <p className="text-sm md:text-[14px] text-gray-600 leading-relaxed">
            {project.titleBody2.body}
          </p>
        </div>

        {/* Previous and Next Project Links */}
        <div className="flex justify-between items-center w-full mt-8 md:mt-0">
          {/* Previous Project Link */}
          {previousProject ? (
            <Link 
              to={`/project-detail-v2/${previousProject.id}`}
              className="text-sm md:text-md text-gray-800 hover:text-gray-600 transition-colors"
            >
              &lt; {previousProject.titleBody.title}
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next Project Link */}
          {nextProject ? (
            <Link 
              to={`/project-detail-v2/${nextProject.id}`}
              className="text-sm md:text-md text-gray-800 hover:text-gray-600 transition-colors"
            >
              {nextProject.titleBody.title} &gt;
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailV2
