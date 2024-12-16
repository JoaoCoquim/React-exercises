import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import usersJSON from './assets/users.json'
import UsersPage from './components/UsersPage/UsersPage';
import NewUserPage from './components/pages/NewUserPage/NewUserPage';
import EditUserPage from './components/pages/EditUserPage/EditUserPage';
import UserPage from './components/pages/UserPage/UserPage';

function App() {

  const [users, setUsers] = useState(usersJSON)

  return (<>

    <Routes>
      <Route path='/' element={<UsersPage users={users} setUsers={setUsers} />} />
      <Route path='/new' element={<NewUserPage users={users} setUsers={setUsers} />} />
      <Route path='/:userId' element={< UserPage users={users} />} />
      <Route path='/edit/:userId' element={<EditUserPage users={users} setUsers={setUsers} />} />
      <Route path='*' element={<div>404 Page!</div>} />
    </Routes>

  </>)
}

export default App;