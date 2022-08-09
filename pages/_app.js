import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import '../styles/index.scss'

function MyApp({Component, pageProps, router}) {
  const [chapter, setChapter] = useState(0)
  const [page, setPage] = useState(0)
  const [snack, setSnack] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleNavVisibility = x => {
    setShowNav(x)
  }

  const setCurrentChapter = chapterId => {
		setChapter(chapterId)
	}

  const setCurrentPage = pageId => {
		setPage(pageId)
	}

  const setCurrentSnack = snack => {
    setSnack(snack)
  }

  const variants = {
    hidden: {opacity: 0, x: 0, y: 700},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -700}
  }

  return (
    <Layout>
      <main>
        {showNav && <Navigation chapter={chapter} page={page} snack={snack} />}
        <AnimatePresence>
          <motion.div key={router.route} 
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={{duration: 0.5, ease: 'easeIn'}} 
          >
            <Component 
              {...pageProps} 
              setCurrentChapter={setCurrentChapter} 
              setCurrentPage={setCurrentPage} 
              setCurrentSnack={setCurrentSnack} 
              handleNavVisibility={handleNavVisibility} 
              router={router}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export default MyApp
