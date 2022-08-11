import {useEffect} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {chapters} from '@/api/data'
import InputSelect from '@/components/InputSelect'
import InputRange from '@/components/InputRange'
import InputText from '@/components/InputText'
import Background from '@/components/Background'

/* export const getServerSideProps = async ({params}) => {
  const data = chapters.map(chapter => {chapter.pages.filter(page => page.pageId.toString() === params.pageId)})

  return {
    props: {page: data}
  }
} */

export const getServerSideProps = async ({params}) => {
  // to do: map over chapters
  const data = chapters[0].pages.filter(page => page.pageId.toString() === params.pageId)

  return {
    props: {page: data}
  }
}

const Page = ({page, ...props}) => {
  const {pageId, text, input, is_snack, btn_link, btn_text} = page[0]
  const {setCurrentPage, setCurrentSnack, router} = props
  const chapterId = router.state.query.chapterId
  const chapterData = chapters.filter(chapter => chapter.chapterId.toString() === chapterId)
  const chapterTitle = chapterData[0].title

  useEffect(() => {
    setCurrentPage(pageId)
    if (is_snack) {setCurrentSnack(true)}
  }, [is_snack, pageId])

  return ( 
    <section className='page'>
      <div className='page-info'>{chapterId} {chapterTitle}</div>
      {text && parse(text)}
      {input && input.type === 'select' && <InputSelect placeholder={input.placeholder} options={input.options} btnTxt={btn_text} />}
      {input && input.type === 'range' && <InputRange name={input.name} min={input.min} max={input.max} label={input.label} btnTxt={btn_text} btnLink={btn_link} />}
      {input && input.type === 'text' && <InputText name={input.name} placeholder={input.placeholder} label={input.label} btnTxt={btn_text} btnLink={btn_link} />}
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