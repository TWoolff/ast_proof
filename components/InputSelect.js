import {useState, useRef, useEffect} from 'react'
import Link from 'next/link'

const InputSelect = props => {
  const ref = useRef(null);
  const {placeholder, options, btnTxt} = props
  const [btnLink, setBtnLink] = useState('/')
  const [selected, setSelected] = useState(placeholder)

  const selectOptions = () => options.map(option => {
    return <option key={option.value} value={option.value} data-link={option.btn_link}>{option.label}</option>
  })
  
  const handleSelect = e => {
    const idx = e.target.selectedIndex
    const option = e.target.querySelectorAll('option')[idx]
    setBtnLink(option.getAttribute('data-link'))
    setSelected(e.target.value)
  }

  const setSelectWidth = e => {
		const target = e ? e.target : ref.current;
		const tempSelect = document.createElement('select');
		const tempOption = document.createElement('option');

		tempOption.textContent = target.options[target.selectedIndex].text;
		tempSelect.style.cssText += 'visibility: hidden; position: fixed;';
		tempSelect.appendChild(tempOption);
		target.after(tempSelect);

		const tempSelectWidth = tempSelect.getBoundingClientRect().width;
		target.style.width = `${tempSelectWidth}px`;
		tempSelect.remove();
	};

	useEffect(() => {
		if (ref.current) {
			setSelectWidth();
		}
	},[InputSelect]);
  
  return ( 
    <>
      <div className='ast-select'>
        <select value={selected} onChange={e => {handleSelect(e); setSelectWidth(e)}} ref={ref}>
          <option value='' hidden>{placeholder}</option>
          {selectOptions()}
        </select>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="13" transform="rotate(90 13 13)" fill="#CE0060" />
          <path d="M17.3362 11.8073L12.9589 16.1846L8.58153 11.8073" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className='btn-container'>
        <Link href={btnLink}><a className='btn btn-secondary'>{btnTxt}</a></Link>
      </div>
    </>
  );
}
 
export default InputSelect;