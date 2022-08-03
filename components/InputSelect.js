import Link from 'next/link'
import Select from 'react-select'
import {useState} from 'react'

const InputSelect = props => {
  const {placeholder, options} = props
  const [btnLink, setBtnLink] = useState('/')
  const handleOnchange = () => {
    setBtnLink('testing')
  }
  return ( 
    <>
      <Select placeholder={placeholder} options={options} onChange={handleOnchange} instanceId='id' />
      <Link href={btnLink}><a className='btn'>{options[0].btn_text}</a></Link>
    </>
  );
}
 
export default InputSelect;