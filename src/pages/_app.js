import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <div>
      <Head>
        <title>Retos Frontend Ciclo 3</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {!load && (
        <Component {...pageProps} />
      )}
    </div>
  )
}

export default MyApp
