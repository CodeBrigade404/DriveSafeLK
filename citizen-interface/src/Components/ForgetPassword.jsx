import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './stylesp.module.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('userData='))
      ?.split('=')[1];

    if (cookieValue) {
      const userDataObj = JSON.parse(cookieValue);
      setEmail(userDataObj.email); // assuming userDataObj has an 'id' property
    }
  }, []);
  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://52.62.90.166:1671/forgetPassword', {
        email,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Reset Your Password</h1>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              className={styles.input}
            />

            {message && <div className={styles.error_msg}>{message}</div>}
            <button type='submit' className={styles.greenbtn}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
