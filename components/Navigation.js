import {useState, useEffect} from 'react'
import {chapters} from '../pages/api/data'

const Navigation = (props) => {
  const { chapter, page, snack } = props
  const [fillHeight, setFillHeight] = useState('0%')

  useEffect(() => {
    chapter ? setFillHeight('33%') : null
    page && !snack ? setFillHeight('66%') : null
    snack ? setFillHeight('100%') : null
  },[chapter, page, snack])

  return ( 
    <nav>
      <aside className='progress'>
        {chapters.map((chapter, idx) => {
          return (
            <div className='progress-section' key={idx} data-chapter={chapter.chapterId}>
              <div className='progress-fill' style={{height : fillHeight, transition: 'height 2s ease'}} />
            </div>
          )
        })}
      </aside>
    </nav>
  )
}
 
export default Navigation