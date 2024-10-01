import { useEffect, useState } from "react";
import lex from "./assets/cloudlex.png"
import Gene from './assets/Gene.webp'
import report from './assets/Final Report - Reyes.pdf'
import Card from "./components/Card";
import motherly from './assets/motherly.png'
import { RiLineHeight } from "react-icons/ri";
import { CgFormatLineHeight } from "react-icons/cg";

function Practicum() {
  const [leading, setLeading] = useState(true);

  useEffect(() => {
    document.title = 'Gene | Practicum'; // Quick solution
  }, []);

  return (
    <div className="flex flex-col gap-3 items-start">

      <Hero/> 

      <div className="flex flex-col items-start pt-2 pb-52 px-6 md:px-20 lg:px-52">

        <button onClick={()=>{setLeading(!leading)}}
          className="bg-gray-100 p-2 text-2xl rounded-md border border-gray-200 self-end"  
        >
          {leading?
            <RiLineHeight/>
            :
            <CgFormatLineHeight/>
          }
        </button>

        <Divider text={'Company Overview'}/>
        <Paragraph leading={leading}>
          I interned at Cloudlex Software Solutions, a prominent software development company.
          Cloudlex is renowned for its passionate team of developers and marketers who are 
          dedicated to providing exceptional service at competitive rates. Located at 1592 Candida St,
          Pandacan, Metro Manila, Cloudlex was founded by Lex Tansiongco with a mission to enhance 
          client satisfaction and service.
        </Paragraph>

        <Divider text={'Nature of Assignments or Tasks Given '}/>
        <Paragraph leading={leading}>
          My main responsibilities included extensive research, active software 
          development, and thorough documentation. Initially, the student was tasked with creating a fully 
          functional e-commerce website by the end of the internship. However, as the internship progressed, 
          the project focus shifted to developing a medical tracking application for mothers, named 
          Motherly. This pivot allowed the intern to explore a different domain and address specific 
          challenges related to healthcare application development.
        </Paragraph>

        <Divider text={'Total Hours Rendered'}/>
        <Paragraph leading={leading}>
          In total, I completed 344 hours during the internship. This included 8 hours 
          dedicated to company orientation, providing a comprehensive understanding of Cloudlex&apos;s 
          operations and culture. The intern spent 72 hours on initial training and developing demo 
          applications, equipping them with the necessary skills and knowledge. A significant portion of 
          time, 184 hours, was focused on the development of the Motherly application, which included 16 
          hours spent in weekly meetings to track progress and receive feedback. Additionally, 40 hours 
          were allocated to documentation and testing, ensuring the application was thoroughly examined 
          for performance and reliability. Another 40 hours were allocated to the finalization and hosting of 
          the application, making it fully functional and accessible to users. The student successfully 
          completed their practicum on July 5, 2024.
        </Paragraph>

        <Divider text={'Conclusion'}/>
        <Paragraph leading={leading}>
          The internship at Cloudlex was an invaluable experience that provided me with 
          significant learning opportunities and professional growth. Over the course of the internship, the 
          student developed essential technical skills, including proficiency in the MERN stack, a deep 
          understanding of accessibility, and expertise in working with Material-UI elements. The student 
          also gained practical experience in setting up Progressive Web Applications, managing time 
          effectively, and applying knowledge from various training resources to real-world projects.
        </Paragraph>

        <Divider text={'Check Out my Output!'}/>
        <Card
          href={'/motherly'}
          src={motherly}
          title='Motherly' 
          text='Motherly is a comprehensive medical tracking application designed specifically for mothers to simplify the management of their children&apos;s healthcare needs.'
        />
      </div>
    </div>
  )
}
function Paragraph({children, leading}){
  return(
    <p className={`text-justify text-gray-700 ${leading? 'leading-10': ''}`}>
      {children}
    </p>
  )
}
function Divider({text}){
  return(
    <>
      <h1 className="font-normal text-2xl text-gray-900 mt-6">
        {text}
      </h1>
      <div className="h-0.5 w-full bg-gray-200 mb-3 rounded-full" />
    </>
  )
}
function Hero(){
  return(
    <div className="flex items-center justify-between px-6 md:px-20 lg:px-52 w-full h-80 bg-sky-950 bg-opacity-95 text-white">
          
      <div className="flex flex-col items-start">
        <h3 className="font-light text-2xl">My internship at</h3>
        <h1 className="font-extrabold text-4xl">Cloudlex software</h1>
        <a
          href={report}
          download
          className='text-white mt-3 bg-pink-600 text-sm py-2 px-5 rounded-full shadow-lg font-semibold hover:bg-pink-400'>
            View my full report
        </a>
      </div>

      <div className="relative items-center justify-center w-60 h-60 sm:flex hidden">
        <img src={lex} alt="cloudlex" className="h-32 z-10"/>
        <div className="absolute top-10 -left-10 bg-sky-400 w-32 h-32 rounded-full"/>
        <div className="absolute bg-sky-800 w-52 h-52 rounded-full"/>
        <div className="absolute bottom-0 -left-20 bg-sky-800 w-32 h-32 rounded-full">
          <img src={Gene} alt="gene" className="absolute -top-12 rounded-full" />
        </div>
      </div>

    </div>
  )
}
export default Practicum