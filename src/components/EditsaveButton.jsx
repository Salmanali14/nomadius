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
import { ref, set, update } from "firebase/database";
import { db } from "./firebaseConfig";
// import "../../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
const EditsaveButton = ({ singlelink, handlelink,handlebtn,btn,links,linkdata,linkTitle,setLinkTitle,editsave,seteditsave,handleeditsave,bggcolor }) => {
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
  const  currentUser  = localStorage.getItem("useruid")
  const [color, setColor] = useState({ background: "#EBEEF1", text: "#333" });
  const handleColorChange = (background, text) => {
    setColor({ background, text });
  };
  let [color1,setColor1]=useState("linear-gradient(to bottom right, #246967, #62d1ce)")
  const handleColorChange1 = (color) => {

    setColor1(color);
};
const handleLinkMediaUpdate =  (linkData, currentUser, allLinks) => {
    // if (linkData?.value) {
    
      if (!linkData.title) {
        // Show alert if the link value is null or empty
        toast.warn("Please add a link title");
        return; // Exit function if link value is null
      }
    
     
     
    if (allLinks) {
      let index = allLinks?.findIndex((elm) => {
        return elm?.id === linkData?.id;
      });
   
       update(ref(db, `User/${currentUser}/links/${index}`), { ...linkData }).then(() => {
      toast.success("Link updated successfuly");
      handleeditsave()
      });
    
    }
    // }
    
  };
  console.log(linkdata)

  return (
    <>
    <div>
     
      <Slide
        in={editsave}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}

      >
        <Box  sx={style2}>
          <div
            className={` w-[100%] h-[100%] overflow-y-auto  flex flex-col items-center relative  bg-[#f3f3f1]`}
           
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[40px] fixed top-0">
              <h2 className="font-[500] text-2xl">Edit</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handleeditsave()}
              />
            </div>
            <div className="w-[100%] mt-5 flex flex-col justify-center items-center "
            style={{
              background:bggcolor,
        
            }}
            >
            <div className="max-w-[435px] w-[100%] flex-col  flex  items-center  mt-10 ">
              <div className="w-[90%]   flex items-center flex-col  rounded-[15px]  ">
             <div className="w-[100%] flex flex-col justify-start">
             <h2 className="text-xl font-[500]">Content</h2>
             <div className="flex w-[100%]  bg-white rounded-[10px] mt-2 justify-center h-[200px]">
<div className="flex justify-start flex-col w-[90%]">
<input type="text" className="outline-none border-b-2 mt-6 font-[500] w-[100%] pb-4 " value={linkTitle}  onChange={(event) => setLinkTitle(event.target.value)} placeholder="Link title"/>
<p className="font-[500] text-[#888] text-[15px] mt-6">Button style</p>
<div className="flex justify-center gap-2 items-center  mt-6 w-[100%]">
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#EBEEF1] font-[500] text-[#333] flex justify-center items-center cursor-pointer" onClick={() => handleColorChange("#EBEEF1", "#333")}>Aa</div>
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#37e6a6] font-[500] text-white   flex justify-center items-center cursor-pointer" onClick={() => handleColorChange("#37e6a6", "#FFFFFF")}>Aa</div>
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#7444F5] font-[500] text-white flex justify-center items-center cursor-pointer" onClick={() => handleColorChange("#7444F5", "#FFFFFF")}>Aa</div>
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#2ebbe6] font-[500] flex text-white justify-center items-center cursor-pointer" onClick={() => handleColorChange("#2ebbe6", "#FFFFFF")}>Aa</div>
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#2a3f45] font-[500] flex justify-center text-white items-center cursor-pointer" onClick={() => handleColorChange("#2a3f45", "#FFFFFF")}>Aa</div>
<div className="w-[40px] h-[40px] rounded-[10px] bg-[#ff5858] font-[500] flex justify-center items-center text-white cursor-pointer" onClick={() => handleColorChange("#ff5858", "#FFFFFF")}>Aa</div>
</div>
</div>
             </div>
             </div>
             <div className="w-[100%] flex flex-col mt-10 justify-start">
             <h2 className="text-xl font-[500]">Preview</h2>
             <div className="w-[100%]  mb-[0px]  flex justify-center bg-white rounded-[15px] items-center">
             <div className="flex  items-center flex-col justify-center w-[90%]">
<div className="border-4 w-[100%] flex justify-center items-center mt-10 h-[90px] rounded-[15px] border-dashed">
<div className="w-[90%] rounded-[10px] flex justify-center items-center  h-[52px]"    style={{ backgroundColor: color.background, color: color.text }}>
<p className="font-[500]">{linkTitle}</p>
<div></div>
</div>
</div>
<div onClick={() => handleLinkMediaUpdate({  linkId: linkdata?.linkId, title: linkTitle,placeholder:linkdata?.placeholder,id:linkdata?.id,color:color.text ,bgcolor:color.background}, currentUser, links)} className="w-[100%] h-[52px]  mt-8 bg-[#37e6a6] rounded-xl flex justify-center items-center font-[600] text-[1.1em] text-white cursor-pointer relative">
Update
</div>
 <br></br>
     
          </div>
          </div>
             </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
         
          </div>  
           
          </div>
         
        </Box>
      </Slide>

      {/*</Modal> */}
    </div>
    </>
  );
};

export default EditsaveButton;
