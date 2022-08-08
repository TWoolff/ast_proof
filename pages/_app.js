import {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import '../styles/index.scss'

function MyApp({Component, pageProps}) {
  const [chapter, setChapter] = useState(null)
  const [page, setPage] = useState(null)
  const [snack, setSnack] = useState(null)
  const [showNav, setShowNav] = useState(true)

  const handleNavVisibility = (setShowNav) => {
    setShowNav(setShowNav)
  }

  const setCurrent = (chapterId, pageId, isSnack) => {
		setChapter(chapterId)
		setPage(pageId)
    setSnack(isSnack)
	}

  return (
    <Layout>
      <main>
        {showNav && <Navigation chapter={chapter} page={page} snack={snack} />}
        <AnimatePresence exitBeforeEnter initial={false} >
          <Component {...pageProps} setCurrent={setCurrent} handleNavVisibility={handleNavVisibility} />
        </AnimatePresence>
      </main>
    </Layout>
  )
}

export default MyApp
