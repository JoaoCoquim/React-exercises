import React, { useState } from 'react'
import usersJSON from './../../assets/users.json'
import User from './../../components/User/User'
import './UsersPage.css'

function UsersPage() {
    const [users, setUsers] = useState(usersJSON)

    // Código estranho do stor - não esquecer de estudar a função .sort()
    const obterNovoUser = () => {
        // sort ordena com uso padrão: espera que a função devolva valor negativo, zero ou positivo
        const sortedUsers = [...users].sort((a, b) => a.id - b.id)
        // vai buscar o ID do ultimo elemento do array e adiciona 1
        const newId = sortedUsers[sortedUsers.length - 1].id + 1

        // Obtém o próximo ID disponível: maior ID atual + 1 (valor inicial 0 para array vazio)
        //const newId = Math.max(...users.map(user => user.id), 0) + 1;

        const newUser = {
            ...users[0],
            id: newId,
            name: `New User ${newId}`,
            age: Number(`${newId}`) + 30,
            position: `Junior Developer ${newId}`
        }

        return newUser;
    }

    const eliminarUser = (idParaEliminar) => {
        // Cópia de users
        let usersCopy = [...users]

        // Eliminar User
        usersCopy = usersCopy.filter(user => user.id !== idParaEliminar)

        // setUsers(cópia)
        setUsers(usersCopy)
    }

    // Adicionar User - Adicionar User com um ID
    const adicionarUser = () => {
        const newUser = obterNovoUser()

        setUsers([...users, newUser]);
    }

    return (
        <div className='user-list'>
            <h2>User List</h2>
            {users.map(user => <User
                eliminarUser={eliminarUser}
                key={user.id}
                user={user} />
            )}
            <br />
            <button className='add-user-button'
                onClick={adicionarUser}
            > Add User </button>
        </div>
    )
}

export default UsersPage