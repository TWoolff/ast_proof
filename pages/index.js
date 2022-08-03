import {chapters} from './api/data'
import Link from 'next/link'
import parse from 'html-react-parser';

export const getServerSideProps = async () => {
  return {
      props: {chapters}
    }
  }
  
const Home = ({chapters}) => {
  return (
      <main>
        <div className='intro'>
          {parse(chapters[0].intro)}
          <Link href={chapters[0].btn_link}><a className='btn'>{chapters[0].btn_text}</a></Link>
          <p className='footnote'>{chapters[0].footnote}</p>
        </div>
      </main>
  )
}

export default Home
