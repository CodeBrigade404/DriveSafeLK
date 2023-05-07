import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);

  const { token } = useParams();

  const resetPassword = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1670/resetPassword/${token}`,
        {
          newPassword: newPassword,
        }
      );
      setResetStatus(response.data.message);
    } catch (error) {
      setResetStatus(error.response.data.message);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <h2>Reset Password</h2>
          <div className={styles.form_container}>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              className={styles.input}
              placeholder="Password"
            />

            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
              placeholder="comfirm Password"
            />

            <button onClick={resetPassword} className={styles.greenbtn}>
              Reset Password
            </button>
          </div>
          {resetStatus && <div className={styles.error_msg}>{resetStatus}</div>}
        </div>
      </div>
    </div>

    // <div className={styles.login_container}>
    //   <div className={styles.login_form_container}>
    //     <div className={styles.left}>
    //       <form className={styles.form_container} >
    //         <h1>Reset Your Password</h1>
    //         <input
    //           type="password"
    //           onChange={(e) => setNewPassword(e.target.value)}
    //           placeholder="Password"
    //           className={styles.input}
    //         />
    //         <input
    //           type="password"
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           placeholder="comfirm Password"
    //           className={styles.input}
    //         />

    //         {resetStatus && (
    //           <div className={styles.error_msg}>{resetStatus}</div>
    //         )}
    //         <button type="submit"onClick={resetPassword} className={styles.greenbtn}>
    //           Reset
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ResetPassword;
