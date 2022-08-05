import {useState} from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import '../styles/index.scss'

function MyApp({Component, pageProps}) {
  const [chapter, setChapter] = useState(null)
  const [page, setPage] = useState(null)
  const [snack, setSnack] = useState(null)

  const setCurrent = (chapterId, pageId, isSnack) => {
		setChapter(chapterId)
		setPage(pageId)
    setSnack(isSnack)
	}

  return (
    <Layout>
      <main>
        <Navigation chapter={chapter} page={page} snack={snack} />
        <Component {...pageProps} setCurrent={ setCurrent } />
      </main>
    </Layout>
  )
}

export default MyApp
