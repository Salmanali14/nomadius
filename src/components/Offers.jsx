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

const Offers = ({ offer, handleoffer }) => {
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

  return (
    <div>
      {/* <Modal
        open={modal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >*/}

      <Slide
        in={offer}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}
      >
        <Box sx={style2}>
          <div
            className={`h-[100%] w-[100%] overflow-y-scroll scrollbar-hide flex flex-col items-center  bg-[#f3f3f1]`}
            // style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[12%] relative">
              <h2 className="font-[500] text-2xl">Rolling Square Club</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handleoffer()}
              />
            </div>
            <div className="w-[100%] h-[87%] flex justify-center items-center">
              <div className="max-w-[435px] w-[100%] b h-[100%] flex  justify-center overflow-y-scroll ">
                <div className="w-[90%] h-[100%]  mt-4">
                  <h2 className="text-xl font-[500] mt-7">Your offers</h2>
                  <div className="w-[100%] h-[500px] bg-white mt-2 rounded-2xl flex flex-col justify-between items-center">
                    <div className="w-[100%] flex justify-center mt-3">
                      <div className="w-[85%]  h-[40px] flex justify-center items-center font-[500] text-[1.2em] text-[#666]">
                        incharge Mini
                      </div>
                    </div>
                    <div className="h-[230px] w-[100%] flex justify-center items-center">
                      <img
                        src="https://sherr.it/images/offers/mini.gif"
                        alt=""
                        className="max-w-[80%] max-h-[100%] m-auto object-cover"
                      />
                    </div>
                    <div className="w-[95%] border-t-2 h-[40px] flex items-center">
                      <p className="text-[14px] font-[600] text-[#666] ml-1">
                        50% coupon code
                      </p>
                    </div>
                    <div className="w-[80%] h-[49px] border-2 border-dashed border-[black] mb-[20px]  rounded-[10px]  font-[600] flex justify-center items-center">
                      jkkxsdud98jkjkjlj
                    </div>
                    <div className="w-[80%] h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center">
                      Claim offer
                    </div>
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

export default Offers;
