import { FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa6"
import { DiJavascript1 } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { SiPostman, SiTailwindcss, SiMongodb } from 'react-icons/si';
import {animate, motion, stagger} from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition:{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
    }
  }
})


const Technologies = () => {
  return (
    <div id="technologies">
      <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity:0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="py-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity:0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
           <FaReact className="text-7xl
            text-cyan-400"/>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
          <DiJavascript1 className="text-7xl text-yellow-500" />
        </motion.div>
        {/* <div className="p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div> */}
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4">
          <GrMysql className="text-7xl text-blue-600" />
        </motion.div>
        {/* <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div> */}
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4">
          <FaLaravel className="text-7xl text-red-600" />
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4">
          <FaPhp className="text-7xl text-indigo-700" />
        </motion.div>
        
      </motion.div>
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