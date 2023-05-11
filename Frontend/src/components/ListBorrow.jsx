import React from 'react'
import '../css/Contact.css'

const ListBorrow = () => {
  return (
    <div className="list-data">
        <div class="title">
            <h2>List Borrow</h2>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Book Borrow</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Si Bolang</td>
              <td>Borrow</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Si Kancil</td>
              <td>Returned</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Angel</td>
              <td>Sebuah Seni Untuk Bersikap Bodo Amat</td>
              <td>Returned</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default ListBorrow