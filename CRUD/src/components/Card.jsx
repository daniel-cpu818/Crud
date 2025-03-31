import React from 'react';
import './Card.css'; 

function Card({ user, showEditModal, deleteUser }) {
  return (
    <div className="card">
  {user.image_url && <img src={user.image_url} alt={user.first_name} />}
  <h2>{user.first_name} {user.last_name}</h2>
  <p>{user.email}</p>
  <p>{user.birthday ? user.birthday.split('T')[0] : 'No birthday available'}</p>
  
  <div className="buttons">
    <button onClick={() => showEditModal(user)}>Edit</button>
    <button className="delete-btn" onClick={() => deleteUser(user)}>Delete</button>
  </div>
</div>

  );
}

export default Card;