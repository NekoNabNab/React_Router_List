import React from 'react'
import "../../css/Dashboard.css"
import icon from '../../img/icon/Icon_Cancel.svg';

const TotalReturn = () => {
  return (
    <div class="card card-1">
      <div class="icon">
          <img class="icon-card" src={icon} alt="" />
      </div>
      <div class="box">
          <h2>76</h2>
          <h4>Total Return</h4>
      </div>
    </div>
  )
}

export default TotalReturn