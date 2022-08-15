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
  const {pageId, is_snack, btn_link, btn_text, content} = currentPage
  const {chapterId, title} = currentChapter
  const {setCurrentPage, setCurrentSnack, setNextLink, handleNavVisibility} = props

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
            {cont.text && 
              parse(cont.text)
            }
            {cont.input && cont.input.type === 'select' && 
              <InputSelect placeholder={cont.input.placeholder} options={cont.input.options} btnTxt={btn_text} btn_link={btn_link} setNextLink={setNextLink} />
            }
            {cont.input && cont.input.type === 'text' && 
              <InputText name={cont.input.name} placeholder={cont.input.placeholder} btnTxt={btn_text} btnLink={btn_link} />
            }
            {cont.input && cont.input.type === 'range' && 
              <InputRange name={cont.input.name} min={cont.input.min} max={cont.input.max} label={cont.input.label} btnTxt={btn_text} btnLink={btn_link} />
            }
            {!cont.input &&
              <div className='btn-container'>
                  <Link href={btn_link}><a className='btn'>{btn_text}</a></Link>
              </div>
            }
          </div>
        )
      })}
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