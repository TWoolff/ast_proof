import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return ( 
    <>
      <Head>
        <title>AST proof</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content'>
          <Header />
          { children }
      </div>
   </>
   )
}
 
export default Layout