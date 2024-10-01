import { useEffect } from "react";

import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    document.title = 'Gene | Contact'; // Quick solution
  }, []);

  return (
    <div className="flex flex-col text-center items-center justify-center h-full py-2 px-6 md:px-20 lg:px-52">
      <h1 className='my-2 font-normal text-3xl text-gray-800'>let&apos;s get in touch</h1>
      <h1 className='font-bold text-3xl text-gray-800 mb-14'>Contact me through these links.</h1>

      <div className="flex flex-col items-start">

        <Links
          icon={<MdEmail/>}
          link={'https://outlook.com'}
          text={'gacreyes@live.mcl.edu.ph'}
          title={'Email'}
        />
        <Links
          icon={<FaGithub/>}
          link={'https://github.com/genemachiene'}
          text={'Github/GeneMachiene'}
          title={'Github'}
        />
        <Links
          icon={<FaLinkedin/>}
          link={'https://www.linkedin.com/in/gacreyes/'}
          text={'LinkedIn/Gene Anthony'}
          title={'LinkedIn'}
        />
      </div>
    </div>
  )
}

function Links({icon, link, text, title}){
  return(
    <div className="flex justify-between gap-6 w-full p-2">
      <span className="flex items-center gap-2 font-bold">{icon || '🔵'} {title || "title"} </span>
      <a target="_blank" href={link || '#'} className="hover:text-purple-500">{text || 'gacreyes@live.mcl.edu.ph'}</a>
    </div>
  )
}

export default Contact