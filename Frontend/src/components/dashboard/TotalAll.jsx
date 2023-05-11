import React from 'react'
import "../../css/Dashboard.css"
import icon from '../../img/icon/Icon_Revenue.svg';

const TotalAll = () => {
  return (
    <div class="card card-1">
      <div class="icon">
          <img class="icon-card" src={icon} alt="" />
      </div>
      <div class="box">
          <h2>76</h2>
          <h4>Total All</h4>
      </div>
    </div>
  )
}

export default TotalAll