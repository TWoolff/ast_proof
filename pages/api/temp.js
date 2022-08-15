








import {useEffect} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {data} from '@/api/data2'
import InputSelect from '@/components/InputSelect'
import InputRange from '@/components/InputRange'
import InputText from '@/components/InputText'
import Background from '@/components/Background'

export const getServerSideProps = async ({params}) => {
  const currentChapter = data.chapters.find(chapter => chapter.chapterId.toString() === params.chapterId)
  const currentPage = currentChapter.pages.find(page => page.pageId.toString() === params.pageId)

  return {
    props: {currentPage, currentChapter}
  }
} 

const Page = ({currentPage, currentChapter, ...props}) => {
  const {pageId, text, input, is_snack, btn_link, btn_text, content} = currentPage
  const {chapterId, title} = currentChapter
  const {setCurrentPage, setCurrentSnack, setNextLink, handleNavVisibility} = props

  return ( 
    <section className='page'>
      <div className='page-info'>{chapterId} {title}</div>
        {content.map((cont, i) => {
          return (
            <div key={i}>
              {cont.text && parse(cont.text)}
              {cont.input && <InputSelect placeholder={cont.input.placeholder} options={cont.input.options} btnTxt={btn_text} btn_link={btn_link} setNextLink={setNextLink} />}
            </div>
          )
        })}
    </section>
  )
}

export default Page