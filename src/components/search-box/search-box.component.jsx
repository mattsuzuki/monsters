import { Component } from "react";


class SearchBox extends Component {

    render(){
        return (
          <input
            className="search-box"
            type="search"
            placeholder="Search"
            // onChange is an anonymous function
            onChange={onSearchChange}
          />
        );
    }
}

export default SearchBox;