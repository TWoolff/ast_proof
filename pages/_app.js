import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import '@/styles/index.scss'

function App({Component, pageProps, router}) {
  const [chapter, setChapter] = useState(0)
  const [page, setPage] = useState(0)
  const [snack, setSnack] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [btnLink, setBtnLink] = useState(null)
  const [navVariants, setNavVariants] = useState('down')

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

  const setNextLink = btnLink => {
    setBtnLink(btnLink)
  }

  const handleNavVariants = y => {
    setNavVariants(y)
  }

  useEffect(() => {
    setNavVariants('down')
  },[chapter, page, snack])

  return (
    <Layout>
      <main>
        {showNav && 
          <Navigation 
            chapter={chapter} 
            page={page} 
            snack={snack} 
            btnLink={btnLink} 
            handleNavVariants={handleNavVariants}
          />
        }
        <AnimatePresence>
          <motion.div key={router.route} 
            initial={{opacity: 0, x: 0, y: navVariants === 'down' ? 700 : -700}}
            animate={{opacity: 1, x: 0, y: 0}}
            exit={{opacity: 0, x: 0, y: navVariants === 'down' ? -700 : 700}}
            transition={{duration: 0.5, ease: 'easeIn'}} 
          >
            <Component 
              {...pageProps} 
              setCurrentChapter={setCurrentChapter} 
              setCurrentPage={setCurrentPage} 
              setCurrentSnack={setCurrentSnack}
              setNextLink={setNextLink}
              handleNavVisibility={handleNavVisibility} 
              handleNavVariants={handleNavVariants}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export default App