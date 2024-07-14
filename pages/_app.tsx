import { AppProps } from 'next/app'

import '../public/tailwindcss/output.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
