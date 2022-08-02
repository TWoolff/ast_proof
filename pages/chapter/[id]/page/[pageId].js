import { chapters } from '../../../api/data'

export const getServerSideProps = async ({ params }) => {
  const data = chapters[1].pages.filter(page => page.pageId.toString() === params.id)

  return {
    props: { page: data }
  }
}

const Page = ({ page }) => {
  console.log(page)
  return ( 
    <div>
      <h1>Page Detail</h1>
      <p>{page[0].text}</p>
    </div>
   );
}
 
export default Page;