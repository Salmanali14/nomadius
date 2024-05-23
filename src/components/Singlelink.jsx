import { Box, Modal, Switch, styled } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { push, ref, serverTimestamp, update } from "firebase/database";
// import { getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import prfl from "../imgs/prfl.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross1 } from "react-icons/rx";
import tau from "../imgs/tau.png";
import aircard from "../imgs/aircard.png";
import { onValue, ref, set, update } from "firebase/database";
import { db } from "./firebaseConfig";
import { useParams } from "react-router-dom";
// import "../../App.css";

const Singlelink = ({ singlelink, handlelink,linkdata,links,setvalue1,value1,setLinkTitle,linkTitle }) => {
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


  let [color,setColor]=useState("linear-gradient(to bottom right, #246967, #62d1ce)")
  const handleColorChange = (color) => {

    setColor(color);


};
const  currentUser  = localStorage.getItem("useruid")

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression pattern for validating contact (phone number)
const contactRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]*$/;




// Regular expression pattern for validating username
const usernameRegex = /^.*$/;
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const handleLinkMediaModalop = (linkData, currentUser, allLinks) => {
    if (!linkData.value) {
      // Show alert if the link value is null or empty
      toast.warn("Please add a link value");
      return; // Exit function if link value is null
    }
    if (!linkData.title) {
      // Show alert if the link value is null or empty
      toast.warn("Please add a link title");
      return; // Exit function if link value is null
    }
  
    // Validate the link value using the linkRegex pattern
    if (linkData.placeholder === "Your E-mail Address") {
      // Check if the input value matches the email regex pattern
      if (!emailRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for email
        toast.error("Invalid email")
        return; // Exit function if input value is invalid for email
      }
  
      // Check if "http" or "https" is included in the email
      if (linkData.value.includes("http") || linkData.value.includes("https")) {
        // Show alert if "http" or "https" is included in the email
        toast.error("Email cannot contain 'http' or 'https'")
        return; // Exit function if "http" or "https" is included in the email
      }
    } else if (linkData.placeholder === "Your Phone Number") {
      // Check if the input value matches the contact regex pattern
      if (!contactRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for contact
        toast.error("Invalid contact")
        return; // Exit function if input value is invalid for contact
      }
    } else if (linkData.placeholder === "Your Instagram username") {
      // Check if the input value matches the username regex pattern
      if (!usernameRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for username
        toast.error("Invalid username")
        return; // Exit function if input value is invalid for username
      }
    } else if (linkData.placeholder === "Your Titkok username") {
      // Check if the input value matches the username regex pattern
      if (!usernameRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for username
        toast.error("Invalid username")
        return; // Exit function if input value is invalid for username
      }
    } else if (linkData.placeholder === "Your Snapchat username") {
      // Check if the input value matches the username regex pattern
      if (!usernameRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for username
        toast.error("Invalid username")
        return; // Exit function if input value is invalid for username
      }
    } else if (linkData.placeholder === "Enter url") {
      // Check if the input value matches the URL regex pattern
      if (!urlRegex.test(linkData.value)) {
        // Show alert if the input value is invalid for URL
        toast.error("Invalid URL")
        return; // Exit function if input value is invalid for URL
      }
    } 
    if (allLinks) {
      set(ref(db, `User/${currentUser}/links/`), [...allLinks, linkData]).then(() => {
        toast.success("Link added successfully")
        setLinkTitle("");
        handlelink();
        setvalue1("");
      });
    } else {
      set(ref(db, `User/${currentUser}/links/`), [linkData]).then(() => {
        toast.success("Link added successfully")
        setLinkTitle("");
        handlelink();
        setvalue1("");
      });
    }
  };
 
 

  let date =Date.now()
 

  return (
    <div>
      {/* <Modal
        open={modal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >*/}

      <Slide
        in={singlelink}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}

      >
        <Box  sx={style2}>
          <div
            className={` w-[100%] h-[100%] overflow-y-auto  flex flex-col items-center relative  bg-[#f3f3f1]`}
            // style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[40px] fixed top-0">
              <h2 className="font-[500] text-2xl">New Link</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handlelink()}
              />
            </div>
            <div className="w-[100%] mt-5 flex flex-col justify-center items-center ">
            <div className="max-w-[435px] w-[100%] flex-col  flex  items-center  mt-10 ">
              <div className="w-[90%]   flex items-center flex-col  rounded-[15px]  ">
             <div className="w-[100%] flex justify-start">
             <h2 className="text-xl font-[500]">Icon and Content</h2>
             </div>
             <div className="w-[100%] mt-2 flex justify-center bg-white rounded-[15px] items-center">
            <div className="flex  items-center flex-col justify-center w-[90%]">
<img src={linkdata?.image} className="w-[80px] mt-5 mb-5"/>
<input type="text" className="outline-none border-b-2 w-[100%] pb-4 " value={linkTitle}  onChange={(event) => setLinkTitle(event.target.value)} placeholder="Link title"/>
<input type="text" className="outline-none border-b-2 w-[100%] pb-4 mt-8 " placeholder={linkdata?.placeholder} value={value1}  onChange={(event) => setvalue1(event.target.value)}/>
<br></br>
         </div>
     
             </div>
             <div className="w-[100%] mt-[50px] mb-2 flex justify-start">
             <h2 className="text-xl font-[500]">Preview</h2>
             </div>
             <div className="w-[100%]  mb-[0px]  flex justify-center bg-white rounded-[15px] items-center">
             <div className="flex  items-center flex-col justify-center w-[90%]">
<div className="border-4 w-[100%] flex justify-center items-center mt-10 h-[90px] rounded-[15px] border-dashed">
<div className="bg-[#eaeef1] w-[90%] rounded-[10px] flex justify-between items-center  h-[52px]">
<div><img className="w-[45px]  ml-1" src={linkdata?.image}/></div>
<p className="mr-7">{linkTitle}</p>
<div></div>
</div>

</div>

<div onClick={() => handleLinkMediaModalop({ name: linkdata.name, linkId: linkdata.id, title: linkTitle,placeholder:linkdata.placeholder,image:linkdata.image,value:value1,id:date }, currentUser, links)} className="w-[100%] h-[52px]  mt-8 bg-[#37e6a6] rounded-xl flex justify-center items-center font-[600] text-[1.1em] text-white cursor-pointer relative">
Confirm
</div>
 <br></br>
     
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
  );
};

export default Singlelink;
