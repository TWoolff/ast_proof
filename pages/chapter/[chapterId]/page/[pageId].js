import parse from 'html-react-parser'
import Link from 'next/link'
import { chapters } from '../../../api/data'
import InputSelect from '../../../../components/InputSelect'
import Background from '../../../../components/Background'

export const getServerSideProps = async ({params}) => {
  // to do: map over chapters
  const data = chapters[1].pages.filter(page => page.pageId.toString() === params.pageId)
  return {
    props: {page: data}
  }
}

const Page = ({page}) => {
  const {pageId, text, select, is_snack, btn_link, btn_text} = page[0]

  return ( 
    <>
      <section className='page' data-page={pageId}>
        {text && parse(text)}
        {select && <InputSelect placeholder={select.placeholder} options={select.options} btnTxt={btn_text} />}
        {is_snack && 
          <>
            <Background />
            <div className='btn-container'>
              <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
            </div>
          </>
        }
      </section>
    </>
  )
}

export default Page; 