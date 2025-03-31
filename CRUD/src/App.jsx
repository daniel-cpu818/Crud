import { useState, useEffect } from 'react';
import React from 'react'
import './App.css'
import { useCrud } from './hooks/useCrud'
import Modal from './components/Modal'
import CardList from './components/CardList.jsx'
import { createPortal } from 'react-dom';
import AddEditForm from './components/AddEditForm';
import { FaPlus } from "react-icons/fa";

const baseUrl = 'https://users-crud-api-production-9c59.up.railway.app/api/v1/users'


function App() {
  const [users, {create, update, remove}] = useCrud(baseUrl)
  const [modal, setModal] = useState({
    open: false,
    child: null,
    showModal: () => {
      setModal((prev) => ({
        ...prev,
        open: true
      }))
    },
    closeModal: () => {
      setModal((prev) => ({
        ...prev,
        open: false
      }))
    },
    setChild: (child) => {
      setModal((prev) => ({
        ...prev,
        child
      }))
    }
    })
    const createData = (newUser) => {
     create(newUser);
    };
    

    const showAddModal = () => {
      modal.setChild(
      <AddEditForm
      submitData={createData}
      closeModal={modal.closeModal}
      />
      );
      modal.showModal();
    };

    const updateUser = (updatedUser) => {
      update(updatedUser.id, updatedUser);
      modal.closeModal();
    }
    const showEditModal = (user) => {
      modal.setChild(
        <AddEditForm submitData={(data) => updateUser({ ...user, ...data })} 
        user={user} closeModal={modal.closeModal} />
      );    
      modal.showModal();
    };
    
    const deleteConfirm = (id) => {
      remove(id);
      modal.closeModal();
    }
  const deleteUser = (user) => {
    modal.showModal();
    modal.setChild(
      <div>
        <h2>Are you sure you want to delete {user.first_name}?</h2>
        <button onClick={modal.closeModal}>Cancel</button>
        <button onClick={ () => deleteConfirm(user.id)}>Delete</button>
      </div>
    );
   
  }
  return (
  <div className="app-container">
    <div className="app-header">
        <h1>Usuarios</h1>
        <button className="add-user-button" onClick={showAddModal}>
          Add User <FaPlus className='faPlus' />
        </button>
    </div>

    <div className="card-list-container">
        {users && <CardList users={users} showEditModal={showEditModal} deleteUser={deleteUser} />}
    </div>

    {createPortal(
        <Modal showModal={modal.open} closeModal={modal.closeModal}>
            {modal.child}
        </Modal>,
        document.body
    )}
  </div>
  )
}
export default App