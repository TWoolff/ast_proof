import Link from 'next/link'

const InputRange = props => {
  const {name, min, max, label, btnTxt, btnLink} = props

  return (
    <div className='ast-input'>
      <input type='range' name={name} min={min} max={max} />
      <label for={name}>{label}</label>
      <div className='btn-container'>
        <Link href={btnLink}><a className='btn btn-secondary'>{btnTxt}</a></Link>
      </div>
    </div>
  )
}

export default InputRange