import React from 'react'
import Layout from './Layout'
import "../css/Dashboard.css"
import TotalAll from '../components/dashboard/TotalAll'
import TotalBorrow from '../components/dashboard/TotalBorrow'
import TotalReturn from '../components/dashboard/TotalReturn'
import FavoriteBook from '../components/dashboard/FavoriteBook'
import BookBorrowed from '../components/dashboard/BookBorrowed'


const Dashboard = () => {
  return (
    <Layout>
      <div class="container-dashboard dashboard">
          <div class="content">
            <br />
            <div className="cards">
              <h3>Welcome Nabila!</h3>
            </div>
            <div class="cards">
                <TotalAll/>
                <TotalBorrow/>
                <TotalReturn/>
            </div>
            <div class="cards">
                <BookBorrowed/>
                <FavoriteBook/>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Dashboard