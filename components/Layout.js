import Head from 'next/head'
import Header from './Header'
import { config } from '../config'

const Layout = (props) => (
  <div>
    <Head>
      <title>{config.appName}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
      <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet" />
    </Head>
    <div>
      <Header/>
      <div className="mt-5 container">
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout