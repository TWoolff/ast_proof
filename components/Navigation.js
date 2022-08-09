import {useState, useEffect} from 'react'
import {chapters} from '../pages/api/data'

const Navigation = (props) => {
  const {chapter, page, snack} = props
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

  const handleNavUp = () => {
  }

  const handleNavDown = () => {
  }

  useEffect(() => {
    chapter ? setFillHeight('33%') : null
    page && !snack ? setFillHeight('66%') : null
    snack ? setFillHeight('100%') : null
  },[chapter, page, snack])

  return ( 
    <nav>
      <a className='nav-up' onClick={handleNavUp} href='#'>{arrowUp}</a>
      <aside className='progress'>
        {chapters.map((chap, idx) => { 
          return (
            <div className='progress-section' key={idx}>
              <div className='progress-fill' style={{height : fillHeight, transition: 'height 2s ease'}} />
            </div>
          )
        })}
      </aside>
      <a className='nav-down' onClick={handleNavDown} href='#'>{arrowDown}</a>
    </nav>
  )
}
 
export default Navigation