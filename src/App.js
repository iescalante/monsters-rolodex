import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/index";
import SearchBox from "./components/SearchBox/index";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMonsters(json);
      });
  };

  useEffect(() => {
    getMonsters();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox searchField={searchField} handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
