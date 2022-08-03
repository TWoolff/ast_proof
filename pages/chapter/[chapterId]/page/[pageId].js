import { chapters } from '../../../api/data'
import InputSelect from '../../../../components/InputSelect'

export const getServerSideProps = async ({params}) => {
  const data = chapters[1].pages.filter(page => page.pageId.toString() === params.pageId)
  return {
    props: {page: data}
  }
}

const Page = ({page}) => {
  const content = page[0]


  
  return ( 
    <div>
      <h1>Page Detail</h1>
      {content.text && <p>{content.text}</p>}
      {content.select && <InputSelect placeholder={content.select.placeholder} options={content.select.options} />}
    </div>
   );
}
 
export default Page;