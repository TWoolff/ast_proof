import { useEffect } from "react"

const InputRange = props => {
  const {name, min, max, label, btnLink, handleBtnLink} = props

  useEffect(() => {
    handleBtnLink(btnLink)
  }, [])

  return (
    <div className='ast-input'>
      <input type='range' name={name} min={min} max={max} />
      <label for={name}>{label}</label>
    </div>
  )
}

export default InputRange