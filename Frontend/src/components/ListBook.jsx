import React from "react";
import "../css/Product.css"
import { NavLink } from "react-router-dom";

const ListBook = ({book}) => {
  return (
    <div className="col-md-3 p-2">
      <div className="card">
        <img
          className="gambar-buku"
          variant="top"
          src={
            "assets/images/" +
            book.category.nama.toLowerCase() +
            "/" +
            book.gambar
          }
        />
        <div className="card-body">
          <div className="text pb-4">
            <h5 className="card-title">{book.nama}</h5>
            <h6 className="card-text">{(book.category.nama)}</h6>
          </div>
          <NavLink to="/" ><li className='btn btn-primary m-1'>Update</li></NavLink>
          <NavLink to="/" ><li className='btn btn-danger m-1'>Delete</li></NavLink>
        </div>
      </div>
    </div>
  )
}

export default ListBook
