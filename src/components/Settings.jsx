import { Box, Modal, Switch, styled } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { push, ref, serverTimestamp, update } from "firebase/database";
// import { getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import prfl from "../imgs/prfl.png";

import { RxCross1 } from "react-icons/rx";
import tau from "../imgs/tau.png";
import aircard from "../imgs/aircard.png";
// import "../../App.css";

const Settings = ({ settings, handleSettings }) => {
  let screenWidth = screen.width;
  const style2 = {
    position: "absolute",
    right: "0%",
    bottom: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 30,
    outline: "none",
  };

  let [showExtra, setshowExtra] = useState(false);

  let toggleShowExtra = () => {
    setshowExtra(!showExtra);
  };

  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    company: "",
  });

  let [img, setimg] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setimg(e.target.files[0]);
    }
  };

  let [isMessage, setIsMessage] = useState(false);

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div>
      {/* <Modal
        open={modal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >*/}

      <Slide
        in={settings}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}
      >
        <Box sx={style2}>
          <div
            className={`h-[100%] w-[100%] overflow-y-scroll scrollbar-hide flex flex-col items-center  bg-[#f3f3f1]`}
            // style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[12%] relative">
              <h2 className="font-[500] text-2xl">Settings</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handleSettings()}
              />
            </div>
            <div className="w-[100%] h-[87%] flex justify-center items-center">
              <div className="max-w-[435px] w-[100%] b h-[100%] flex  justify-center overflow-y-scroll ">
                <div className="w-[90%] h-[100%]  mt-4">
                  <h2 className="text-xl font-[500]">Profile</h2>
                  <div className="w-[100%] h-[550px] bg-white mt-2 rounded-2xl">
                    <div className="w-[100%] flex justify-center ">
                      <div className="h-[150px] w-[150px] rounded-full flex justify-center items-center border-[7px] border-[#ededed] mt-4">
                        <img
                          src={prfl}
                          className="h-[100%] w-[100%] rounded-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-[100%] flex flex-col items-center mt-6">
                      <div className="w-[90%] flex justify-between items-center ">
                        <input
                          type="text"
                          className="w-[48%] h-[40px] outline-none border-b-2"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="w-[48%] h-[40px] outline-none border-b-2"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <input
                          type="text"
                          className="w-[100%] h-[40px] outline-none border-b-2"
                          placeholder="Job position"
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <input
                          type="text"
                          className="w-[100%] h-[40px] outline-none border-b-2"
                          placeholder="Company"
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <p>Bio</p>
                        <textarea
                          name=""
                          id=""
                          className="w-[100%] pl-[2%] h-[100px] outline-none border-2 rounded-md mt-1 resize-none"
                          placeholder="Company"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] flex justify-center items-center mt-5">
                    <h2 className="font-[500] text-[18px] text-[#546160] cursor-pointer">
                      Change your Password
                    </h2>
                  </div>
                  <h2 className="text-xl font-[500] mt-6">Your short url</h2>
                  <div className="w-[100%] h-[350px] bg-white mt-2 rounded-2xl flex flex-col justify-between items-center">
                    <div className="w-[100%] flex justify-center mt-3">
                      <div className="w-[85%]  border-b-[2px] h-[40px] flex justify-center items-center font-[500] text-[0.9em]">
                        https://www.nomdius.com/muhammad
                      </div>
                    </div>
                    <div className="h-[180px] w-[180px] flex justify-center items-center">
                      <QRCode
                        //   value={cardUrl + userId}
                        size="150"

                        // eyeRadius={10}
                      />
                    </div>
                    <div className="w-[100%] h-[45px] text-[#358567] bg-[#edfff8] text-[0.9em] font-[500] rounded-b-2xl flex justify-center items-center">
                      Use the QR code to share your Sherr.it profile.
                    </div>
                  </div>

                  <h2 className="text-xl font-[500] mt-7">Redirect</h2>
                  <div className="w-[100%] h-[213px] bg-white mt-2 rounded-2xl flex flex-col justify-around items-center">
                    <div
                      className="w-[92%] flex justify-between items-center
                    "
                    >
                      <p className="text-[#666] text-[1em] font-[600]">
                        Redirect to an external url?
                      </p>
                      <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </div>

                    <div
                      className="w-[92%]
                    "
                    >
                      <input
                        type="text"
                        className="w-[95%] outline-none"
                        placeholder="Paste your link here"
                      />
                    </div>

                    <div
                      className="w-[92%] flex justify-between items-center
                    "
                    >
                      <p className="text-[#666] text-[1em] font-[600]">
                        Redirect to Contact Card?
                      </p>
                      <IOSSwitch sx={{ m: 1 }} defaultChecked />
                    </div>
                  </div>

                  <h2 className="text-xl font-[500] mt-7">Your items</h2>
                  <div className="w-[100%] h-[450px] bg-white mt-2 rounded-2xl flex flex-col justify-between items-center">
                    <div className="w-[100%] flex justify-center mt-3">
                      <div className="w-[85%]  border-b-[2px] h-[40px] flex justify-center items-center font-[500] text-[1em]">
                        Muhammad's TAU 2
                      </div>
                    </div>
                    <div className="h-[230px] w-[100%] flex justify-center items-center">
                      <img
                        src={tau}
                        alt=""
                        className="w-[80%] m-auto object-cover"
                      />
                    </div>
                    <p className="font-[600] text-[14px] text-[#999]">
                      Linked to your account 64 days ago
                    </p>

                    <div className="w-[80%] h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center">
                      Setup Lost Mode
                    </div>
                  </div>

                  <div className="w-[100%] h-[450px] bg-white mt-6 rounded-2xl flex flex-col justify-between items-center">
                    <div className="w-[100%] flex justify-center mt-3">
                      <div className="w-[85%]  border-b-[2px] h-[40px] flex justify-center items-center font-[500] text-[1em]">
                        Muhammad's Aircard
                      </div>
                    </div>
                    <div className="h-[230px] w-[100%] flex justify-center items-center">
                      <img
                        src={aircard}
                        alt=""
                        className="w-[80%] m-auto object-cover"
                      />
                    </div>
                    <p className="font-[600] text-[14px] text-[#999]">
                      Linked to your account 64 days ago
                    </p>

                    <div className="w-[80%] h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                      Setup Lost Mode
                    </div>
                  </div>

                  <div className="w-[100%] h-[66px] bg-white mt-6 rounded-xl flex  justify-center items-center gap-5">
                    <div className="w-[40%] h-[46px] bg-[#37e6a6] rounded-[10px] flex justify-center items-center text-white font-[500] cursor-pointer">
                      Log Out
                    </div>
                    <div className="w-[40%] h-[46px] bg-[#506160] rounded-[10px] flex justify-center items-center text-white font-[500] cursor-pointer">
                      Done
                    </div>
                  </div>

                  <div className="w-[100%] flex justify-center items-center mt-6">
                    <p className="cursor-pointer text-[1.2em] text-[#506160] font-[600]">
                      Delete Account
                    </p>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Slide>

      {/*</Modal> */}
    </div>
  );
};

export default Settings;
