import Head from 'next/head'
import Header from './Header'

const Layout = ({ ... props }) => {

  return ( 
    <>
      <Head>
        <title>AST proof</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='content'> 
        { props.children }
      </div>
   </>
   )
}
 
export default Layout