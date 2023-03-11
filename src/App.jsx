// 1 - Done
// Создать SPA. И вывести карточки с информацией о юзерах. В информации должны быть поля: name, age, gender, balance,
//  а так же фотка src которой должно быть равно полю picture. Юзеров берем в массиве userData который прикреплен 
//  ниже (добавьте файл с данными себе в реакт проект). Каждая карточка должна быть отдельным компонентом.
// 2
// Создать header в котором будет input. Создать поиск юзеров по-имени. Cмотрим поле name.
// 3
// Создать сортировку по-возрасту (смотрим поле age). Сортировка должна работать 
// с помощью тега select и находиться в хедере. 
// Добавить возможность сбросить сортировку и поле input, после чего вывести юзеров в первоначальном состоянии.

import React, { useState } from "react";
import './App.css';
import { userData } from './userData';
import Card from "./Card";
import Header from "./Header";



function App() {

  const listofUsers = userData.map((item) => item);
  const [users, setUsers] = useState(listofUsers);

  // const [name, setName] = useState("");


  const usersFiltering = (name) => {
    
    // console.log(listofUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase())));
    return listofUsers.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
  };



  let handleInputChange = (event) => { 
    setUsers(usersFiltering(event.target.value));
  }




  return (
    <div className="App">
      <>
        <div className="container">
          <Header
            handleInputChange={handleInputChange}
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
