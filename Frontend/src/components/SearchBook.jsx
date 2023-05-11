import React, { Component } from 'react'

export default class SearchBook extends Component {
  render() {
    return (
        <form class="d-flex mb-4 " role="search">
            <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        </form>
    )
  }
}