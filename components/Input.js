import {useState, useRef, useEffect} from 'react'

const Input = props => {
  const ref = useRef(null);
  const {type, placeholder, label, name, options, min, max, btn_link, handleBtnLink} = props
  const [selected, setSelected] = useState(placeholder)

  const selectOptions = () => options.map(option => { // mapping out options
    return <option key={option.value} value={option.value} data-link={option.btn_link}>{option.label}</option>
  })
  
  const handleSelect = e => { // select option + setting button link from selected
    const i = e.target.selectedIndex
    const option = e.target.querySelectorAll('option')[i]
    handleBtnLink(option.getAttribute('data-link'))
    setSelected(e.target.value)
  }

  const setSelectWidth = e => { // select box width based on option content
    const target = e ? e.target : ref.current
    const tempSelect = document.createElement('select')
    const tempOption = document.createElement('option')
    
    tempOption.textContent = target.options[target.selectedIndex].text
    tempSelect.style.cssText += 'visibility: hidden; position: fixed;'
    tempSelect.appendChild(tempOption)
    target.after(tempSelect)
    
    const tempSelectWidth = tempSelect.getBoundingClientRect().width
    target.style.width = `${tempSelectWidth}px`
    tempSelect.remove()
  }
  
  useEffect(() => {
    handleBtnLink(btn_link)
    if (ref.current) {setSelectWidth()}
  },[])

  if (type === 'select') {
    return (
      <div className='ast-input'>
        <select value={selected} onChange={e => {handleSelect(e); setSelectWidth(e)}} ref={ref}>
          <option value='' hidden>{placeholder}</option>
          {selectOptions()}
        </select>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="13" transform="rotate(90 13 13)" fill="#CE0060" />
          <path d="M17.3362 11.8073L12.9589 16.1846L8.58153 11.8073" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    )
  }  

  if (type === 'text') {
    return (
      <div className='ast-input'>
        <input type='text' name={name} placeholder={placeholder} />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  }

  if (type === 'range') {
    return (
      <div className='ast-input'>
        <input type='range' name={name} min={min} max={max} />
        <label for={name}>{label}</label>
      </div>
    )
  }
}
 
export default Input