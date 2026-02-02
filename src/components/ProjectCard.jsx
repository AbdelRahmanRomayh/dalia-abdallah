import { useNavigate } from 'react-router-dom'

function ProjectCard({ image, title, projectId }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project-detail-v2/${projectId}`)
  }

  return (
    <div 
      className="cursor-pointer group"
      onClick={handleClick}
    >
      <div className="w-full bg-gray-200 aspect-[4/3] mb-3 md:mb-4 group-hover:opacity-90 transition-opacity overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <h3 className="text-gray-800 font-sans uppercase tracking-wide text-xs md:text-sm">
        {title}
      </h3>
    </div>
  )
}

export default ProjectCard

