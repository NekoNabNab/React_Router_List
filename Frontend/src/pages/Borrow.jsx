import React from 'react'
import Layout from './Layout'
import '../css/Product.css'
import ListBorrow from '../components/ListBorrow'

const Borrow = () => {
  return (
    <Layout>
      <div class="container-list product">
          <div class="content">
            <ListBorrow/>
          </div>
      </div>
    </Layout>
  )
}

export default Borrow