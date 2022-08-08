import Image from 'next/image'

const Header = () => {
  return ( 
    <header>
      <div className='header-content'>
        <a href='/'><Image src='/logo.svg' alt='PKA logo' height={50} width={50} /></a> 
        <a href='/' className='header-title'>Servicetjek</a> 
        <a href='' className='header-logout'><span>Log af</span><Image src='/icon-lock.svg' alt='log af' height={22} width={18} /></a>
      </div>
    </header>
  )
}
 
export default Header