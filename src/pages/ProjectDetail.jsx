import { useParams, Link } from 'react-router-dom'

function ProjectDetail() {
  const { id } = useParams()

  // Sample data - replace with actual project data
  const projectData = {
    title: 'Project Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: null, // Add your project image path here
    images_1: [
      // Add your project images here
      // Example: '/path/to/image1.jpg', '/path/to/image2.jpg', etc.
      // For now, using null as placeholders - replace with actual image paths
      null, null // 2 images = 1 row
    ],
    images_2: [
      // Add your project images here
      // Example: '/path/to/image1.jpg', '/path/to/image2.jpg', etc.
      // For now, using null as placeholders - replace with actual image paths
      null, null, null, null, null, null, // 6 images = 2 rows
    ],
    projectTypes: [
      { label: 'Project type', link: '#' },
      { label: 'Project type', link: '#' },
      { label: 'Project type', link: '#' },
      { label: 'Project type', link: '#' },
    ],
    credit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    nextProject: {
      id: 2,
      title: 'Next Project Title'
    }
  }

  return (
    <div className="min-h-screen bg-white max-w-full md:max-w-[calc(100%-370px)] mx-auto px-4 md:px-0">
      <div className="w-full px-4 md:px-8 py-6 md:py-12">
        {/* First Component: Large Image */}
        <div className="mb-8 md:mb-[72px]">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[562px] bg-transparent flex items-center justify-center overflow-hidden">
            {projectData.image ? (
              <img 
                src={projectData.image} 
                alt={projectData.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        {/* Second Component: Title/Body on Left, Links on Right */}
        {/* Header */}
        <div className="mb-8 md:mb-[72px]">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            {projectData.title}
          </h1>

          {/* Body and Project Types - Flex between */}
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-4 md:gap-0">
            {/* Body */}
            <p className="text-sm md:text-sm text-gray-600 leading-relaxed w-full md:w-[490px]">
              {projectData.body}
            </p>

            {/* Project Types Links */}
            <div className="flex flex-col gap-1">
              {projectData.projectTypes.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-md text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Images of Project - 2 columns, 2 images per column */}
        {projectData.images_1 && projectData.images_1.length > 0 && (
          <div className="mb-8 md:mb-[72px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectData.images_1.map((image, index) => (
              <div key={index} className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] bg-transparent">
                {image ? (
                  <img 
                    src={image} 
                    alt={`${projectData.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        )}
        

        <div className="mb-8 md:mb-[72px]">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[562px] bg-transparent flex items-center justify-center overflow-hidden">
            {projectData.image ? (
              <img 
                src={projectData.image} 
                alt={projectData.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>
        
        {/* Project Images Grid - 3 columns, dynamic rows */}
        {projectData.images_2 && projectData.images_2.length > 0 && (
          <div className="mb-8 md:mb-[58px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectData.images_2.map((image, index) => (
              <div key={index} className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[397px] bg-transparent">
                {image ? (
                  <img 
                    src={image} 
                    alt={`${projectData.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Credit Section and Next Project Link */}
        {/* Credit Header */}
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Credit:</h2>

        {/* Credit Body and Next Project Link - Flex between */}
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-4 md:gap-0">
          {/* Credit Body */}
          <p className="text-sm text-gray-600 leading-relaxed w-full md:w-[490px]">
            {projectData.credit}
          </p>

          {/* Next Project Link */}
          <div>
            <Link 
              to={`/project/${projectData.nextProject.id}`}
              className="text-sm md:text-md text-gray-800 hover:text-gray-600 transition-colors"
            >
              {projectData.nextProject.title} &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
