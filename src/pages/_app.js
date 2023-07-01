import {Navbar} from '@/component/Navbar'
import styled from '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <div>
    <Navbar  />
    <Component styled {...pageProps} />
    </div>
  )
}
