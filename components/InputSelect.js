import {useState} from 'react'
import Link from 'next/link'

const InputSelect = props => {
  const {placeholder, options, btnTxt} = props
  const [btnLink, setBtnLink] = useState('/')
  const [selected, setSelected] = useState(placeholder)
  const selectOptions = () => options.map(option => {
    return <option key={option.value} value={option.value} data-link={option.btn_link}>{option.label}</option>
  })
  const handleSelect = (e) => {
    const idx = e.target.selectedIndex
    const option = e.target.querySelectorAll('option')[idx]
    setBtnLink(option.getAttribute('data-link'))
    setSelected(e.target.value)
  }
  
  return ( 
    <>
      <select value={selected} onChange={e => {handleSelect(e)}}>
        <option value='' hidden>{placeholder}</option>
        {selectOptions()}
      </select>
      <div className='btn-container'>
        <Link href={btnLink}><a className='btn'>{btnTxt}</a></Link>
      </div>
    </>
  );
}
 
export default InputSelect;