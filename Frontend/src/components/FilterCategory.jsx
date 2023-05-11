import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/Constant";

export default class FilterCategory extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          categories: [],
        };
      }
    
      componentDidMount() {
        axios
          .get(API_URL + "categories")
          .then((res) => {
            const categories = res.data;
            this.setState({ categories });
          })
          .catch((error) => {
            console.log("Error yaa ", error);
          });
      }
    render() {
        const { categories } = this.state;
        const { changeCategory, categoriYangDipilih } = this.props;
        return (
        <div className="">
            <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                Filter Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {categories &&
                categories.map((category) => (
                <Dropdown.Item
                    key={category.id}
                    onClick={() => changeCategory(category.nama)}
                    className={categoriYangDipilih === category.nama && "category-aktif"}
                    style={{cursor: 'pointer'}}
                >
                    <li>{category.nama}</li>
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
            </Dropdown>
        </div>
        )
    }
}