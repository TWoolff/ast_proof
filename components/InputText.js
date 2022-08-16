import {useEffect} from 'react'

const InputText = props => {
  const {name, placeholder, label, btnLink, handleBtnLink} = props

  useEffect(() => {
    handleBtnLink(btnLink)
  }, [])

  return (
    <div className='ast-input'>
      <input type='text' name={name} placeholder={placeholder} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
 
export default InputText