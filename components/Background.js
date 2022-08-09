import {motion} from 'framer-motion'

const Background = () => {
  const container = {show: {transition: {staggerChildren: 0.8}}}
  const item = {show: {scale: 1.5, transition: {duration: 3, repeat: Infinity, repeatType: 'reverse'}}}
  
  return (
    <div className='snack-background'>
      <motion.svg style={{overflow: 'visible'}} variants={container} animate="show" viewBox="0 0 1440 578" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle variants={item} opacity="0.05" cx="1032.5" cy="293.5" r="38.4329" transform="rotate(-120 1032.5 293.5)" fill="#CE0060" />
        <motion.circle variants={item} opacity="0.05" cx="374" cy="55" r="55" fill="#CE0060" />
        <motion.circle variants={item} opacity="0.05" cx="-66" cy="437" r="141" fill="#CE0060" />
        <motion.circle variants={item} opacity="0.05" cx="1417.4" cy="426.304" r="98.528" transform="rotate(-120 1417.4 426.304)" fill="#CE0060" />
      </motion.svg>
    </div>
  )
}

export default Background