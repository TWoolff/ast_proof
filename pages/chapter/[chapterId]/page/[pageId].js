import {useEffect, useState} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {data} from '@/api/data'
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
  const {pageId, text, input, is_snack, btn_link, btn_text} = currentPage
  const {chapterId, title} = currentChapter
  const {setCurrentPage, setCurrentSnack, setNextLink, handleNavVisibility} = props
  const [btnLink, setBtnLink] = useState('')

  const handleBtnLink = (btn) => {
    setBtnLink(btn)
  }

  useEffect(() => {
    setCurrentPage(pageId)
    setNextLink(btn_link)
    setBtnLink(btn_link)
    handleNavVisibility(true)
    if (is_snack) {setCurrentSnack(true)} else {setCurrentSnack(false)}
  }, [is_snack, pageId, btn_link])

console.log(btnLink)

  return ( 
    <section className='page'>
      <div className='page-info'>{chapterId} {title}</div>
      {text && parse(text)}
      {input && input.type === 'select' && <InputSelect placeholder={input.placeholder} options={input.options} btn_link={btn_link} setNextLink={setNextLink} handleBtnLink={handleBtnLink} />}
      {input && input.type === 'range' && <InputRange name={input.name} min={input.min} max={input.max} label={input.label} btnTxt={btn_text} btnLink={btn_link} handleBtnLink={handleBtnLink} />}
      {input && input.type === 'text' && <InputText name={input.name} placeholder={input.placeholder} label={input.label} btnTxt={btn_text} btnLink={btn_link} handleBtnLink={handleBtnLink} />}
        <div className='btn-container'>
            <Link href={btnLink}><a className={is_snack ? 'btn' : 'btn btn-secondary'}>{btn_text}</a></Link>
        </div>
      {is_snack && 
          <Background />
      }
    </section>
  )
}

export default Page