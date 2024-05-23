import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import React, { useState } from "react";
import { auth, db } from "../components/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Forget = () => {
  const [email, setEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const handleResetPassword = async () => {
    try {
      if (!email) {
       toast.error("Please enter a valid email address.")
        return;
      }

      const emailRegEx =
        /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (!emailRegEx.test(email)) {
        toast.error("Please enter a valid email address.")
        return;
      }

      const deviceRef = query(
        ref(db, "/User"),
        orderByChild("email"),
        equalTo(email)
      );

      onValue(deviceRef, (snapshot) => {
        const userData = snapshot.val();
        console.log(userData);
  
        if (!userData) {
          toast.error("This email does not have an associated account.")
          return;
        }
  
        // Email exists, proceed with password reset
        sendPasswordResetEmail(auth, email)
          .then(() => {
            toast.success("Password reset sent into your email. Check your email.")
            setEmail("");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Error sending password reset email.")
          });
      });
    } catch (error) {
      console.error(error);
      toast.error("Error sending password reset email.");
    }
  };
  return (
    <>
    <div
      className="w-[100%] h-[100%] flex justify-center items-center"
      style={{
        background: "linear-gradient(to bottom right, #246967, #62d1ce)",
      }}
    >
      <div className="max-w-[435px] w-[100%]  h-[100%] flex justify-center items-center">
        <div className="w-[90%] h-[70%]  flex flex-col items-center justify-between">
          <h2 className="text-4xl font-[700] text-white">N O M A D I U S</h2>
          <div className="w-[100%] h-[47%] flex flex-col justify-between items-center">
            <p className="text-[white] text-[700] text-center text-[18px]">
              Enter your e-mail below to get your login link
            </p>

            <div className="w-[100%]">
              <input
                type="text"
                className="w-[100%] pl-[2%] h-[60px]  bg-[#fff] rounded-xl shadow-lg outline-none"
                placeholder="Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div onClick={handleResetPassword} className="w-[100%] h-[60px] text-xl bg-[#57d678] rounded-xl shadow-lg cursor-pointer flex justify-center items-center text-white font-[500]">
              Confirm
            </div>
          </div>
          <div>{/* LOG IN */}</div>
        </div>
      </div>
    </div>
    <ToastContainer
    position="top-center"
    reverseOrder={false}
  />
</>
  );
};

export default Forget;
