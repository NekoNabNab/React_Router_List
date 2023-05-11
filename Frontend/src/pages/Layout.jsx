import React from 'react'
import "../css/Layout.css"
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <body className='container-fluid layout row m-0 p-0'>
          <div className='col-lg-2 layout-sidebar m-0 p-0'><Sidebar/></div>
          <div className='col-lg-10 m-0 pr-2 main-bar'>{children}</div>
      </body>
    </React.Fragment>
  )
}

export default Layout