import Link from 'next/link'

const InputText = props => {
  const {name, placeholder, label, btnTxt, btnLink} = props

  return (
    <div className='ast-input'>
      <input type='text' name={name} placeholder={placeholder} />
      <label htmlFor={name}>{label}</label>
      <div className='btn-container'>
        <Link href={btnLink}><a className='btn btn-secondary'>{btnTxt}</a></Link>
      </div>
    </div>
  )
}
 
export default InputText