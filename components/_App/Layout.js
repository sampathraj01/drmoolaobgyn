import React from 'react'
import Head from 'next/head'
import GoTop from './GoTop'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dr.Sudha Moola Ob/Gyn Complete Women Care</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="DrMoolaObgyn"
        />
        <meta
          name="og:title"
          property="og:title"
          content="DrMoolaObgyn"
        ></meta>
        <meta
          name="twitter:card"
          content="DisDrMoolaObgynn"
        ></meta>
        <link rel="canonical" href="https://-react.envytheme.com/"></link>
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default Layout
