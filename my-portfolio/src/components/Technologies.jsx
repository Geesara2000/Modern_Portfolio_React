import { FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa6"
import { DiJavascript1 } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiPostman, SiTailwindcss, SiMongodb } from 'react-icons/si';


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
           <FaReact className="text-7xl
            text-cyan-400"/>
        </div>
        <div className="p-4">
          <DiJavascript1 className="text-7xl text-yellow-500" />
        </div>
        {/* <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div> */}
        <div className="p-4">
          <GrMysql className="text-7xl text-blue-600" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
          <FaLaravel className="text-7xl text-red-600" />
        </div>
        <div className="p-4">
          <FaPhp className="text-7xl text-indigo-700" />
        </div>
        
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="p-4">
        <SiTailwindcss className="text-7xl text-teal-400" />
      </div>
      <div className="p-4">
        <FaBootstrap className="text-7xl text-purple-600" />
      </div>
      <div className="p-4">
        <SiPostman className="text-7xl text-orange-400" />
      </div>
      </div> */}
    </div>
  )
}

export default Technologies