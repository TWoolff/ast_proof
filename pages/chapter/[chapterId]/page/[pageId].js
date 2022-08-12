import {useEffect} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {chapters} from '@/api/data'
import InputSelect from '@/components/InputSelect'
import InputRange from '@/components/InputRange'
import InputText from '@/components/InputText'
import Background from '@/components/Background'

export const getServerSideProps = async ({params}) => {
  const currentChapter = chapters.find(chapter => chapter.chapterId.toString() === params.chapterId)
  const currentPage = currentChapter.pages.find(page => page.pageId.toString() === params.pageId)

  return {
    props: {currentPage, currentChapter}
  }
} 

const Page = ({currentPage, currentChapter, ...props}) => {
  const {pageId, text, input, is_snack, btn_link, btn_text} = currentPage
  const {chapterId, title} = currentChapter
  const {setCurrentPage, setCurrentSnack, setNextLink} = props

  useEffect(() => {
    setCurrentPage(pageId)
    setNextLink(btn_link)
    if (is_snack) {setCurrentSnack(true)} else {setCurrentSnack(false)}
  }, [is_snack, pageId, btn_link])

  return ( 
    <section className='page'>
      <div className='page-info'>{chapterId} {title}</div>
      {text && parse(text)}
      {input && input.type === 'select' && <InputSelect placeholder={input.placeholder} options={input.options} btnTxt={btn_text} setNextLink={setNextLink} />}
      {input && input.type === 'range' && <InputRange name={input.name} min={input.min} max={input.max} label={input.label} btnTxt={btn_text} btnLink={btn_link} />}
      {input && input.type === 'text' && <InputText name={input.name} placeholder={input.placeholder} label={input.label} btnTxt={btn_text} btnLink={btn_link} />}
      {!input && !is_snack &&
        <div className='btn-container'>
            <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
        </div>
      }
      {is_snack && 
        <>
          <Background />
          <div className='btn-container'>
            <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
          </div>
        </>
      }
    </section>
  )
}

export default Page