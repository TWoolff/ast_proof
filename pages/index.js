import Link from 'next/link'
import parse from 'html-react-parser'
import {home} from '@/api/data'

export const getServerSideProps = async () => {
  return {
      props: {home}
    }
  }
  
const Home = ({home}) => {
  const {user_name, intro, btn_link, btn_text, footnote} = home

  return (
    <section className='intro'>
      <p>Hej {user_name}</p>
      {parse(intro)}
      <div className='btn-container'>
        <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
      </div>
      <p className='footnote'>{parse(footnote)}</p>
    </section>
  )
}

export default Home
