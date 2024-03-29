import parse from 'html-react-parser'
import {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {data} from '@/api/data'

export const getServerSideProps = async ({params}) => {
  const currentChapter = data.chapters.find(chapter => chapter.chapterId.toString() === params.chapterId)

  return {
    props: {currentChapter}
  }
}

const Chapter = ({currentChapter, ...props}) => {
  const {chapterId, title, intro, image, btn_link, btn_text} = currentChapter
  const {handleNavVisibility, setCurrentChapter, setCurrentPage, setCurrentSnack, setNextLink} = props

  useEffect(() => {
    handleNavVisibility(true)
    setCurrentPage(0)
    setCurrentSnack(false)
    setCurrentChapter(chapterId)
    setNextLink(btn_link)
  }, [])

  return ( 
    <section className='chapter'>
      <div className='chapter-content'>
        <h2>{chapterId} {title}</h2>
        {parse(intro)}
        <div className='btn-container'>
          <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
        </div>
      </div>
      <Image src={image} height={240} width={240} className='chapter-img' />
    </section>
  )
}
 
export default Chapter