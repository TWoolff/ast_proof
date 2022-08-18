import {useEffect, useState} from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
import {data} from '@/api/data2'
import Input from '@/components/Input'
import Background from '@/components/Background'

export const getServerSideProps = async ({params}) => {
  const currentChapter = data.chapters.find(chapter => chapter.chapterId.toString() === params.chapterId)
  const currentPage = currentChapter.pages.find(page => page.pageId.toString() === params.pageId)

  return {
    props: {currentPage, currentChapter}
  }
} 

const Page = ({currentPage, currentChapter, ...props}) => {
  const {pageId, is_snack, btn_link, btn_text, content} = currentPage
  const {chapterId, title} = currentChapter
  const {setCurrentPage, setCurrentSnack, setNextLink, handleNavVisibility} = props
  const [btnLink, setBtnLink] = useState('')

  const handleBtnLink = (btn) => {
    setBtnLink(btn)
  }

  useEffect(() => {
    setCurrentPage(pageId)
    setNextLink(btn_link)
    handleNavVisibility(true)
    if (is_snack) {setCurrentSnack(true)} else {setCurrentSnack(false)}
  }, [is_snack, pageId, btn_link])

  return ( 
    <section className='page'>
      <div className='page-info'>{chapterId} {title}</div>
      {content.map((cont, i) => {
        return (
          <div key={i}>
            {cont.text && parse(cont.text)}
            {cont.input &&
              <Input
                type={cont.input.type}
                placeholder={cont.input.placeholder}
                options={cont.input.options}
                name={cont.input.name}
                min={cont.input.min}
                max={cont.input.max}
                label={cont.input.label}
                btn_link={btn_link}
                setNextLink={setNextLink}
                handleBtnLink={handleBtnLink}
              />
            }   
          </div>
        )
      })}
      <div className='btn-container'>
        <Link href={btnLink}><a className={is_snack ? 'btn' : 'btn btn-secondary'}>{btn_text}</a></Link>
      </div>
      {is_snack && <Background />}
    </section>
  )
}

export default Page