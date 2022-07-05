import { chapters } from '../api/data'
import Link from 'next/link'
import Image from 'next/image'

export const getServerSideProps = async ({ params }) => {
  const data = chapters.filter(chapter => chapter.id.toString() === params.id)

  return {
    props: { chapter: data[0] }
  }
}

const Chapter = ({ chapter }) => {
  return ( 
    <div>
      <h2>{ chapter.title }</h2>
      <p>{ chapter.intro }</p>
      <Link href={chapter.btn_link}><a className='btn'>{ chapter.btn_text }</a></Link>
      <Image src={chapter.image} height={240} width={240} />
    </div>
   )
}
 
export default Chapter;