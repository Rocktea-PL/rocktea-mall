import  { useState } from 'react';
import LoginBg from '../../../assets/login-bg.png';
import Button from '../../Button';
import { NavLink } from 'react-router-dom';
import { loginUser } from '../../../../pages/auth/auth'; // Import the login function from your auth.js file

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(credentials); // Call the login function
      // Handle successful login (e.g., store token, redirect user)
      console.log('Login successful:', response);
    } catch (error) {
      setError('Invalid credentials. Please try again.'); // Handle login error
      console.error('Login error:', error);
    }
  };

  return (
    <section
      className="md:p-10 min-h-screen"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form
        action=""
        className="form pb-7 h-auto m-auto mt-8 "
        onSubmit={handleFormSubmit} // Call handleFormSubmit on form submission
      >
        <h2>Welcome!</h2>
        <div className="flex flex-col gap-4 px-5 md:mt-5">
          <label>
            Email
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="**********************"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </label>
          <div className="flex items-center justify-between w-[90%]">
            <label className="flex flex-row-reverse items-center justify-center">
              Remember me
              <input
                type="checkbox"
                className="w-[30px] h-3 mt-0 px-1"
              />
            </label>
            <p className="text-sm text-[var(--deep-blue)]">Forgot Password?</p>
          </div>
        </div>

        {error && <div className="text-red-500">{error}</div>}

        <div className="flex items-center justify-center mt-8">
          <Button text="Sign In" />
        </div>
        <p className="text-[15px] text-center mt-5">
          Do not have an account?{' '}
          <NavLink to="/register" style={{ color: 'var(--deep-blue)', fontWeight: 'bold' }}>
            Sign Up
          </NavLink>{' '}
        </p>
      </form>
    </section>
  );
}

export default Login;
