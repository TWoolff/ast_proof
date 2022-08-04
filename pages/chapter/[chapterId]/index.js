import Link from 'next/link'
import Image from 'next/image'
import parse from 'html-react-parser'
import {chapters} from '../../api/data'

export const getServerSideProps = async ({params}) => {
  const data = chapters.filter(chapter => chapter.chapterId.toString() === params.chapterId)

  return {
    props: {chapter: data[0]}
  }
}

const Chapter = ({chapter}) => {
  const {title, intro, image, btn_link, btn_text} = chapter

  return ( 
    <section className='chapter'>
      <h2>{title}</h2>
      <p>{parse(intro)}</p>
      <div className='btn-container'>
        <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
      </div>
      <Image src={image} height={240} width={240} />
    </section>
  )
}
 
export default Chapter;