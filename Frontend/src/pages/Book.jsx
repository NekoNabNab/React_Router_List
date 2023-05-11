import React, { Component } from "react";
import Layout from './Layout'
import '../css/Contact.css'
import ListBook from '../components/ListBook'
import { API_URL } from "../utils/Constant";
import axios from "axios";
import SearchBook from "../components/SearchBook";
import FilterCategory from "../components/FilterCategory";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      categoriYangDipilih: "Fiksi",
    };
  }

  componentDidMount() {
    axios
    .get(API_URL + "books?category.nama=" + this.state.categoriYangDipilih)
    .then((res) => {
      const books = res.data;
      this.setState({ books });
    })
    .catch((error) => {
      console.log("Error yaa ", error);
    });
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      books: [],
    });

    axios
      .get(API_URL + "books?category.nama=" + value)
      .then((res) => {
        const books = res.data;
        this.setState({ books });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { books, categoriYangDipilih } = this.state;
    return (
      <Layout>
        <div class="container-list product">
            <div class="content">
              <div className="list-data">
                  <div className="title">
                    <h2>List Book</h2>
                  </div>
                  <div className="bg-transparent pb-3">
                    {/* <div className="col"><SearchBook/></div> */}
                    <div className="">
                      <FilterCategory
                      changeCategory={this.changeCategory}
                      categoriYangDipilih={categoriYangDipilih}/>
                    </div>
                  </div>
                  <div className="row list-book bg-transparent">
                    {books && books.map((book) => (
                      <ListBook
                      key={book.id}
                      book={book}
                      />
                    ))}
                  </div>
              </div>
            </div>
        </div>
      </Layout>
    )
  }
}