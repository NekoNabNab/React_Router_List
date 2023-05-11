import React from 'react'
import "../../css/Dashboard.css"

const BookBorrowed = () => {
  return (
    <div class="statistik order">
        <div class="title">
            <h2>Book Borrow</h2>
        </div>
        <table>
            <tr>
                <th>Date</th>
                <th>Book Title</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>12/03/2022</td>
                <td>Ikigai</td>
                <td>Returned</td>
            </tr>
            <tr>
                <td>12/03/2022</td>
                <td>Si Bolang</td>
                <td>Borrow</td>
            </tr>
        </table>
    </div>
  )
}

export default BookBorrowed