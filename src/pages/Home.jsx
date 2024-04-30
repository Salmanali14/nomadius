import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import prfl from "../imgs/prfl.png";
import nomadius from "../imgs/nomadius.jpg";
import Settings from "../components/Settings";
import { SiTicktick } from "react-icons/si";
import Offers from "../components/Offers";

const Home = () => {
  let [settings, setsettings] = useState(false);
  let [edit, setEdit] = useState(false);
  let handleSettings = () => {
    setsettings(!settings);
  };

  let [offer, setoffer] = useState(false);
  let handleoffer = () => {
    setoffer(!offer);
  };
  return (
    <div
      className="w-[100%] h-[100%] flex justify-center items-center relative"
      style={{
        background: "linear-gradient(to bottom right, #246967, #62d1ce)",
        overflow: "hidden",
      }}
    >
      <Settings settings={settings} handleSettings={handleSettings} />
      <Offers offer={offer} handleoffer={handleoffer} />
      <div className="max-w-[435px] w-[100%]  h-[100%] flex justify-center overflow-y-scroll ">
        <div className="w-[90%] mt-[100px] min-h-[400px] h-max  bg-white rounded-xl flex flex-col items-center">
          <div className="w-[95%] flex  justify-between mt-2">
            <div
              className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-[#eff3f5]"
              onClick={() => handleSettings()}
            >
              <IoSettingsSharp className="text-[#6b6b6b] text-xl cursor-pointer" />
            </div>
            <div className="relative h-[100px] w-[166px]">
              <div className="h-[166px] w-[166px] rounded-full flex justify-center items-center border-[7px] border-[#ededed] absolute top-[-85px]">
                <img
                  src={prfl}
                  className="h-[100%] w-[100%] rounded-full object-cover"
                  alt=""
                />
              </div>
            </div>
            {!edit ? (
              <div
                className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-[#eff3f5] cursor-pointer"
                onClick={() => setEdit(true)}
              >
                <HiPencil className="text-[#6b6b6b] text-2xl cursor-pointer" />
              </div>
            ) : (
              <div
                className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-[#37e6a6] cursor-pointer"
                onClick={() => setEdit(false)}
              >
                <SiTicktick className="text-white text-2xl cursor-pointer" />
              </div>
            )}
          </div>
          <h2 className="font-[600] text-[22px]">Muhammad Abdullah</h2>
          <p className="text-[1.1em] text-[#00C084] text-center">
            Ceo - Avicenna
          </p>
          <div className="w-[85%]  border-t-[2px] mt-3 flex justify-center">
            <p className="w-[95%] text-left text-[14px] font-[500] text-[#666] mt-1">
              This is my bio , this is my bio this is my bio , this is my bio ,
              this is my bio
            </p>
          </div>

          <div className="w-[85%] h-[52px]  mt-5 bg-[#37e6a6] rounded-xl flex justify-center items-center font-[600] text-[1.1em] text-white cursor-pointer">
            Save Contact
          </div>

          <div className="w-[100%] flex flex-col items-center mt-4">
            <div className="w-[85%] h-[52px] bg-[#eaeef1] rounded-xl "></div>
            <div className="w-[85%] h-[52px] bg-[#eaeef1] rounded-xl mt-4"></div>
            <div className="w-[85%] h-[52px] bg-[#eaeef1] rounded-xl mt-4"></div>
            <div className="w-[85%] h-[52px] bg-[#eaeef1] rounded-xl mt-4"></div>
            <div className="w-[85%] h-[52px] bg-[#eaeef1] rounded-xl mt-4"></div>
            {edit && (
              <div className="w-[85%] h-[52px] border-[2px] border-[#EBEEF1] border-dashed rounded-xl mt-4 font-[600] text-[1.1em] text-[#999] flex justify-center items-center cursor-pointer">
                + Add More
              </div>
            )}
          </div>
          {edit && (
            <div className="w-[100%] flex flex-col items-center mt-6 ">
              <h2 className="font-[600] text-[20px]">Edit theme</h2>
              <div className="w-[80%] flex justify-between mt-2">
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #4d5e5b, #2b302f)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #ff5858, #ffc8c8)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #a18cd1, #fbc2eb)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #85ffbd, #fffb7d)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #c2c2c2, #919191)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #246967, #62d1ce)",
                  }}
                ></div>
                <div
                  className="w-[32px] h-[32px] cursor-pointer rounded-md"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #bd99e8, #d9fdff)",
                  }}
                ></div>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
        </div>
      </div>

      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="w-[100%] h-[55px] bg-white absolute bottom-0 z-50 flex">
        <div
          className="w-[50%] h-[100%] flex justify-center items-center cursor-pointer"
          style={!offer ? { borderTop: "6px solid #37e6a6" } : null}
          onClick={() => setoffer(false)}
        >
          <img
            src={prfl}
            alt=""
            className="h-[35px] w-[35px] rounded-full"
            style={!offer ? { border: "1px solid #37e6a6" } : null}
          />
        </div>
        <div
          className="w-[50%] h-[100%] flex justify-center items-center cursor-pointer"
          style={offer ? { borderTop: "6px solid #37e6a6" } : null}
        >
          <img
            src={nomadius}
            alt=""
            className="h-[35px] w-[35px] rounded-full"
            onClick={() => handleoffer()}
            style={offer ? { border: "1px solid #37e6a6" } : null}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
