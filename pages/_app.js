import '../styles/globals.css'
import Layout from '../components/Layout'
import GlobalProvider from '../context/GlobalState';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0
  },
  visible: {
    x: '0vw',
    opacity: 1,
    transition: {
      duration: 0.8
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      duration: 0.8
    }
  }
}

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
      key={router.route}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      >
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp
