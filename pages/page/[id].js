import { chapters } from '../api/data'

export const getServerSideProps = async ({ params }) => {
  const data = chapters.pages.filter(page => page.id.toString() === params.id)

  return {
    props: { page: data }
  }
}

const Page = ({ page }) => {
  console.log(page)
  return ( 
    <div>
      <h1>Page Detail</h1>
    </div>
   );
}
 
export default Page;