import * as React from "react"
import GlobalStyles from '../styles/GlobalStyles'

import { Layout } from './styles';

const IndexPage: React.FC = () => {
  return (
    <>
      <Layout>
        <h1>Hello World!</h1>
        <h1>How are you World!</h1>
        <h1>Goodbye World!</h1>
      </Layout>
      <GlobalStyles />
    </>
  )
}

export default IndexPage
