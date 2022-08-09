import parse from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'
import {chapters} from '../../api/data'
import { useEffect } from 'react'

export const getServerSideProps = async ({params}) => {
  const data = chapters.filter(chapter => chapter.chapterId.toString() === params.chapterId)

  return {
    props: {chapter: data[0]}
  }
}

const Chapter = ({chapter, ...props}) => {
  const {chapterId, title, intro, image, btn_link, btn_text} = chapter

  useEffect(() => {
    props.handleNavVisibility(true)
  }, [])

  return ( 
    <>
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
    </>
  )
}
 
export default Chapter;