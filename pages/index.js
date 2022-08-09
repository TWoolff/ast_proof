import Link from 'next/link'
import parse from 'html-react-parser'
import {chapters} from './api/data'

export const getServerSideProps = async () => {
  return {
      props: {chapters}
    }
  }
  
const Home = ({chapters}) => {
  const {intro, btn_link, btn_text, footnote} = chapters[0]

  return (
    <section className='intro'>
      {parse(intro)}
      <div className='btn-container'>
        <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
      </div>
      <p className='footnote'>{parse(footnote)}</p>
    </section>
  )
}

export default Home
