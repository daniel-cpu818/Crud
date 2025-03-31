import React, { useState, useEffect } from 'react';
import './AddEditForm.css';
const initialValues = {
  first_name: '',  
  last_name: '',
  email: '',
  password: '',
  birthday: '',   
  image_url: ''
};

function AddEditForm({ user = null, closeModal, submitData }) {
  const [dataForm, setDataForm] = useState(initialValues);

  useEffect(() => {
    if (user) {
      setDataForm(user);
    } else {
      setDataForm(initialValues);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: name === 'birthday' ? new Date(value).toISOString().split('T')[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(dataForm);
    setDataForm(initialValues);
    closeModal();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
  <div className="form-group">
    <label>
      First Name 
      <input type="text" name="first_name" placeholder="First Name" 
        value={dataForm.first_name} onChange={handleChange} className="form-input" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Last Name 
      <input type="text" name="last_name" placeholder="Last Name" 
        value={dataForm.last_name} onChange={handleChange} className="form-input" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Email 
      <input type="email" name="email" placeholder="Email" 
        value={dataForm.email} onChange={handleChange} className="form-input" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Password 
      <input type="password" name="password" placeholder="Password" 
        value={dataForm.password} onChange={handleChange} className="form-input" />
    </label>
  </div>
  <div className="form-group">
    <label>
      Birthdate
      <input
      type="date"
      name="birthday"
      placeholder="Birthday"
      value={dataForm.birthday} 
      onChange={handleChange} className="form-input" />
    </label>
  </div>
  <div>
    <label>
      Image URL
      <input type="url" name="image_url" placeholder="Image URL" 
        value={dataForm.image_url} onChange={handleChange} className="form-input" />
    </label>
  </div>
  <button type="submit" className="form-button primary">
    {user ? 'Edit' : 'Add'}
  </button>
  <button type="button" onClick={closeModal} className="form-button secondary">Cancel</button>
</form>
  );
}
export default AddEditForm;