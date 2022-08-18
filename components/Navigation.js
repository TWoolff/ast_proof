import {useState, useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'

const Navigation = props => {
  const {chapter, page, snack, btnLink, handleNavVariants} = props
  const [fillHeight, setFillHeight] = useState('0%')

  const arrowUp = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="20.5" transform="rotate(-90 21 21)" fill="white" stroke="#D8D4D7" />
      <path d="M13.9956 22.9265L21.0666 15.8554L28.1377 22.9265" stroke="#92004D" strokeWidth="2" />
    </svg>
  )
  
  const arrowDown = (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="20.5" transform="rotate(90 21 21)" fill="white" stroke="#D8D4D7" />
      <path d="M28.0044 19.0735L20.9333 26.1446L13.8623 19.0735" stroke="#92004D" strokeWidth="2" />
    </svg>
  )

  const handleClick = () => {
    Router.back()
    handleNavVariants('up')
  }

  useEffect(() => {
    chapter ? setFillHeight('33%') : null
    page && !snack ? setFillHeight('66%') : null
    snack ? setFillHeight('100%') : null
  },[chapter, page, snack])

  return ( 
    <nav>
      <a className='nav-up' onClick={() => handleClick()}>{arrowUp}</a>
      <aside className='progress'>
        {data.chapters.map((e, i) => { 
          return (
            <div className={'progress-section ' + (chapter > 1 && i < chapter - 1 ? 'progress-read' : '')} key={i}>
              <div className='progress-fill' style={i === chapter - 1 ? {height: fillHeight} : {}} />
            </div>
          )
        })}
      </aside>
      <Link href={btnLink} className='nav-down'><a>{arrowDown}</a></Link>
    </nav>
  )
}
 
export default Navigation