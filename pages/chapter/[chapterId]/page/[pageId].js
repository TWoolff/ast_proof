import { chapters } from '../../../api/data'
import Link from 'next/link'
import { useState } from 'react'

export const getServerSideProps = async ({ params }) => {
  const data = chapters[1].pages.filter(page => page.pageId.toString() === params.pageId)
  return {
    props: { page: data }
  }
}

const Page = ({ page }) => {
  const [optionLink, setOptionLink] = useState(null)
  const content = page[0]


  
  return ( 
    <div>
      <h1>Page Detail</h1>
      <p>{ content.text }</p>
      { content.select && <select defaultValue={content.select.placeholder}>
        <option value="" selected disabled hidden>{ content.select.placeholder }</option>
        { content.select.options.map(option => { return <option value={option.value} key={option.value}>{ option.label }</option>}) }
      </select> }
      <Link href={ content.btn_link }><a className='btn'>{ content.btn_text }</a></Link>
    </div>
   );
}
 
export default Page;