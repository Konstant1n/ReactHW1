import React, { useState } from "react";
import './App.css';
import Card from "./Card";
import { userData } from './userData';


function App() {

  const listofUsers = userData.map((item) => item);
  const [users, setUsers] = useState(listofUsers);
  // console.log(listofUsers);


  // function Card = () => {

  // {users.map((user) => (
  //   <UserCard user={user} key={user._id} handleShowModal={() => handleShowModal(user)}  
  //   />
  // }

  // };




  return (
    <div className="App">
      <>
        <div className="container">
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
