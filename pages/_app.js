import '../styles/globals.css'
import Layout from '../components/Mobile Menu/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp