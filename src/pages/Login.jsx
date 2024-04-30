import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
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
              />
              <input
                type="text"
                className="w-[100%] pl-[2%] h-[60px]  bg-[#fff] rounded-xl shadow-lg outline-none mt-5"
                placeholder="Password"
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
            onClick={() => navigate("/")}
          >
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
