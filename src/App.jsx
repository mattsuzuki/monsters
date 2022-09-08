import { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    //Give us the value that is typed in the search bar

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // Set new variable which will return the FILTERED Monstors
    const filteredMonsters = this.state.monsters.filter((monster) => {
      //If the name INCLUDES the value from the event.target.value include it.
      return monster.name.toLowerCase().includes(searchField);
    });
    // Everytime React needs to update the DOM it runs the render Method
    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeholder="search"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
