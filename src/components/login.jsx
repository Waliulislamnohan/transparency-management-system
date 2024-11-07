import React,{useState} from 'react';

export default function Login() {
    const mockUsername = 'user';
    const mockPassword = '1234';
  
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    // Function to handle input changes
    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
      if (formData.username === '' || formData.password === '') {
        setError('Please fill in all fields.');
        setSuccess(false);
      } else if (formData.username === mockUsername && formData.password === mockPassword) {
        setError('');
        setSuccess(true); // Simulate successful login
      } else {
        setError('Invalid username or password.');
        setSuccess(false);
      }
    }

    
  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.username === '' || formData.password === '') {
      setError('Please fill in all fields.');
      setSuccess(false);
    } else if (formData.username === mockUsername && formData.password === mockPassword) {
      setError('');
      setSuccess(true); // Simulate successful login
    } else {
      setError('Invalid username or password.');
      setSuccess(false);
    }
  }

  return (
    <>
    <div className="admin-page-container">
    <div className='login-container'>
          <h2 className="login-title">Login</h2>
          {error && <p className="login-error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label htmlFor="username" className="login-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password" className="login-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
    </div>
    </div>
    </>
  )
}
