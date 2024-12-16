import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './EditUserPage.css'

function EditUserPage({ users, setUsers }) {

  const { userId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState("")

  //Find User to be updated
  const user = users.find(s => s.id === parseInt(userId, 10));

  if (!user) {
    return <div>User not found. <Link to="/">Return</Link></div>;
  }

  useEffect(() => {
    if(user){
      setName(user.name);
      setAge(user.age);
      setPosition(user.position);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedUser = {
      ...user,
      name: name,
      age: age,
      position: position,
    }

    setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));
    
    navigate("/")

  }

  return (
    <div className="editUser-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name='age'
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name='position'
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
        </div>
        <button type="submit" className="saveBtn">Save</button>
      </form>
      <Link to={"/"} className="returnBtn">Return</Link>
    </div>
  )
}

export default EditUserPage