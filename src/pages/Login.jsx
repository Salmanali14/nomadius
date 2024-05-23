import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebaseConfig";
import { ref, update } from "firebase/database";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("useruid", user?.uid)
              toast.success("Successfully Login!")
              setTimeout(function() {
                navigate("/");
              }, 2000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(error.message);
          if (error.code === "auth/invalid-email") {
            toast.error("Invalid  Emial!")
          } else if (error.code === "auth/invalid-credential") {
            toast.error("Invalid password!")
          } else {
            toast.error(errorMessage);
          }
        });
    } else {
      toast.error("Email and password should not be empty!")
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
        <div className="w-[90%] h-[80%]  flex flex-col items-center justify-between">
          <h2 className="text-4xl font-[700] text-white">N O M A D I U S</h2>
          <div className="w-[100%] h-[55%] flex flex-col justify-between items-center">
            <p className="text-[white] text-[700] text-center text-[18px]">
              Please enter your login details
            </p>

            <div className="w-[100%]">
              <input
                type="text"
                className="w-[100%] pl-[2%] h-[60px]  bg-[#fff] rounded-xl shadow-lg outline-none"
                placeholder="Email"
                value={email} onChange={(e) => setEmail(e.target.value)} 
              />
              <input
                type="text"
                className="w-[100%] pl-[2%] h-[60px]  bg-[#fff] rounded-xl shadow-lg outline-none mt-5"
                placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p
              className="text-[white] text-[700] text-center text-[20px] underline cursor-pointer"
              onClick={() => navigate("/forgot")}
            >
              Forgot your password?
            </p>
          </div>
          <div
            className="w-[100%] h-[60px] bg-[#57d678] rounded-xl shadow-lg cursor-pointer flex justify-center items-center text-white font-[500]"
            onClick={() => handleLogin()}
          >
            LOG IN
          </div>
        </div>
      </div>
    </div>
    <ToastContainer
    position="top-center"
    autoClose={2000} // Auto close after 3 seconds
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    transition={Slide} // Optional transition effect
  />
    </>
  );
};

export default Login;
