import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <title>Hydranet: Bringing Bitcoin to DeFi</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
