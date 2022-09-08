import { Component } from "react";

import "./search-box.styles.css"

class SearchBox extends Component {

    render(){
        return (
          <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            // onChange is an anonymous function
            onChange={this.props.onChangeHandler}
          />
        );
    }
}

export default SearchBox;