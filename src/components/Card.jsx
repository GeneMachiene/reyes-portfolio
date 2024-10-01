import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card({src, text, title, href}) {
  const navigate = useNavigate();

  function link(){
    navigate(href || "#");
  }
  return(
    <div onClick={link} className="group cursor-pointer flex flex-col min-w-72 min-h-80 md:w-96 w-full bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300">
      <img src={src || 'https://www.shutterstock.com/shutterstock/photos/2155242945/display_1500/stock-vector-image-coming-soon-no-photo-no-thumbnail-image-available-missing-picture-icon-vector-illustration-2155242945.jpg'}
        alt={`${title} image`}
        className="bg-slate-50 w-full h-40 object-cover group-hover:opacity-85 transition-all duration-300"/>
      <div className="px-4 pb-3 pt-1">
        <div className='flex items-center gap-2'>
          <h1 className="font-bold text-xl my-3">{title || 'Hello'}</h1>
          <FaExternalLinkAlt className={`text-sm text-purple-600 ${href? 'visible':'hidden'}`}/>
        </div>
        <p className="line-clamp-4 text-sm text-gray-500">{text || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus ipsam exercitationem doloremque.'}</p>
      </div>
    </div>
  )
}

export default Card