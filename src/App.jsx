import React, { useState } from "react";
import './App.css';
import { userData } from './userData';
import Card from "./Card";
import Header from "./Header";



function App() {

  const listofUsers = userData.map((item) => item);
  const [users, setUsers] = useState(listofUsers);

  const [filter, setFilter] = useState({
    byName: "",
    sortByAge: "default"
  });


  // const usersFiltering = (name) => {
  //   // console.log(listofUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase())));
  //   return listofUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
  // };

  const sortingUsers = (byName, sortByAge) => {
    switch (sortByAge) {
      case "ascending":
        return listofUsers
          .sort((a, b) => a.age - b.age)
          .filter((user) =>
            user.name.toLowerCase().includes(byName.toLowerCase())
          );
      case "descending":
        return listofUsers
          .sort((a, b) => b.age - a.age)
          .filter((user) =>
            user.name.toLowerCase().includes(byName.toLowerCase())
          );
      case "default":
      default:
        return listofUsers
          .sort((a, b) => a.index - b.index)
          .filter((user) =>
            user.name.toLowerCase().includes(byName.toLowerCase())
          );
    }
  };



  let handleInputNameChange = (event) => {
    setFilter({ byName: event.target.value, sortByAge: filter.sortByAge })
    setUsers(sortingUsers(event.target.value, filter.sortByAge));
  };

  let handleSelectSortChange = (event) => {
    setFilter({ byName: filter.byName, sortByAge: event.target.value });
    setUsers(sortingUsers(filter.byName, event.target.value));
  };

  let handleResetAllData = () => {
    setFilter({byName: "", sortByAge: "default"});
    setUsers(listofUsers);

  }

  return (
    <div className="App">
      <>
        <div className="container">
          <Header
            filter={filter}
            handleInputNameChange={handleInputNameChange}
            handleSelectSortChange={handleSelectSortChange}
            handleResetAllData = {handleResetAllData}
          />

          {users.map((user) =>
            (
              <Card user={user} key={user._id} />
            )
          )}

        </div>
      </>

    </div>
  );
}

export default App;
