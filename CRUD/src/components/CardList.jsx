import React, { useState } from 'react';
import Card from './Card';
import Search from './Search';

function CardList({ users, showEditModal, deleteUser }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-list">

      {/* Componente de búsqueda */}
      <Search onSearch={setSearchTerm} />

      {/* Lista de usuarios filtrados */}
      {filteredUsers.length ? (
        filteredUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            showEditModal={() => showEditModal(user)}
            deleteUser={() => deleteUser(user)}
          />
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}


export default CardList;
