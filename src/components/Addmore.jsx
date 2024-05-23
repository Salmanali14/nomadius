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
import email from "../sociallinks/email.png"
import { RxCross1 } from "react-icons/rx";
import tau from "../imgs/tau.png";
import aircard from "../imgs/aircard.png";
import { FiMenu } from "react-icons/fi";
import whatsp from '../sociallinks/whatsapp1.png'
import insta from '../sociallinks/instagram.png'
import call from '../sociallinks/phone.png'
import Message from '../sociallinks/text.png'
import website from '../sociallinks/website.png'
import map from '../sociallinks/google maps.png'
import link from '../sociallinks/link.png'
import facebook from '../sociallinks/facebook.png'
import twitter from '../sociallinks/twitter.png'
import titok from '../sociallinks/tiktok1.png'
import youtube from '../sociallinks/youtube.png'
import telegram from '../sociallinks/telegram1.png'
import wechat from '../sociallinks/wechat.svg'
import discord from '../sociallinks/discord.png'

import Snapchat from '../sociallinks/snapchat.png'
import Mastodon from '../sociallinks/mastodon.svg'
import Twitch from '../sociallinks/twitch.svg'
import Line from '../sociallinks/line.png'
import Signal from '../sociallinks/signal.svg'
import plus from '../sociallinks/icons8-plus-90 (1).png'
import GitHub1 from '../sociallinks/github-square.svg'
import LinkedIn from '../sociallinks/linkedin.png'
import Calendly from '../sociallinks/Calendly.svg'







import { GrFormSubtract } from "react-icons/gr";
import Singlelink from "./Singlelink";
import SavecontactBTN from "./SavecontactBTN";
import { onValue, ref, set } from "firebase/database";
import { db } from "./firebaseConfig";
import { useParams } from "react-router-dom";
// import "../../App.css";

const Addmore = ({ addmore, handleaddmore,links }) => {
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
  let [singlelink, setsinglelink] = useState(false);
  let [linkdata, setlinkdata] = useState({});
  let handlelink = (item) => {
    setlinkdata(item)
    setsinglelink(!singlelink);
  };
  let [btn,setbtn] = useState(false);
  let handlebtn = (item) => {
    setbtn(!btn);
    setlinkdata(item)
  };
 
  const dataArray = [
    { id: 0, name: "Save Contacts",placeholder:"Link Title",Title:"Save Contacts",color:"",bgcolor:"" },
    { id: 1, name: "E-mail", image: email,placeholder:"Your E-mail Address",Title:"E-mail" },
    { id: 2, name: "Whatsapp", image: whatsp,placeholder:"Your Phone Number",Title:"Whatsapp" },
    { id: 3, name: "Call", image:call ,placeholder:"Your Phone Number",Title:"Call" },
    { id: 4, name: "Message", image:Message,placeholder:"Your Phone Number",Title:"Message"  },
    { id: 5, name: "Website", image:website,placeholder:"https://" ,Title:"Website" },
    { id: 6, name: "Address", image:map,placeholder:"Your Address",Title:"Address"  },
    { id: 7, name: "Custom", image: link,placeholder:"Your Business Address",Title:"Custom"  },
  ];
  const social = [
    { id: 8, name: "Facebook", image: facebook,placeholder:"Your Facebook profile link",Title:"Facebook"  },
    { id: 9, name: "Instagram", image: insta,placeholder:"Your Instagram username" ,Title:"Instagram" },
    { id: 10, name: "We chat", image:wechat,placeholder:"Your We chat ID",Title:"We chat"  },
    { id: 11, name: "Line", image:Line ,placeholder:"Your Line profile link",Title:"Line" },
    { id: 12, name: "Signal", image:Signal,placeholder:"Your Phone Number" ,Title:"Signal" },
    { id: 13, name: "Twitter", image:twitter,placeholder:"Your Twitter profile link" ,Title:"Twitter" },
    { id: 14, name: "Tittok", image:titok,placeholder:"Your Titkok username",Title:"Tittok"  },
    { id: 15, name: "Telegram", image:telegram,placeholder:"Your Telegram link" ,Title:"Telegram" },
    { id: 16, name: "Youtube", image:youtube,placeholder:"Your Channel URL" ,Title:"Youtube" },
    { id: 17, name: "Snapchat", image:Snapchat,placeholder:"Your Snapchat username",Title:"Snapchat"  },
    { id: 18, name: "Twitch", image:Twitch,placeholder:"Your Twitch link",Title:"Twitch"  },
    { id: 19, name: "Mastodon", image:Mastodon,placeholder:"Your Mastodon profile link ",Title:"Mastodon"  },
  ];
  const Professional = [
    { id: 20, name: "Calendly", image: Calendly,placeholder:"Your Calendly URL ",Title:"Calendly"  },
    { id: 21, name: "LinkedIn", image: LinkedIn,placeholder:"Your LinkedIn profile link " ,Title:"LinkedIn" },
    { id: 22, name: "GitHub", image:GitHub1 ,placeholder:"Your url",Title:"GitHub" },


  ];
  let [value1,setvalue1]=useState("")
  const [linkTitle, setLinkTitle] = useState('');
  const  currentUser  = localStorage.getItem("useruid")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression pattern for validating contact (phone number)
const contactRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]*$/;




// Regular expression pattern for validating username
const usernameRegex = /^.*$/;
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
 
  const[selectlinks,setselectlinks]=useState([])
  useEffect(() => {
    let getdata = async () => {
    const starCountRef = ref(db,`User/${currentUser}/links/`);
    onValue(starCountRef, async (snapshot) => {
    let fetchdata = await snapshot.val();
    console.log(fetchdata)
    setselectlinks(Object.values(fetchdata));
    });
    };
    getdata();
  },[])
  const checkLinkExists = (linkId) => {
   return selectlinks.some(link => link.linkId === linkId);
 };
 
 ///////////tick on link/////
 let checkAdded = (linkId) => {
  if (links) {
    let ifAdded = links?.some((elm) => {
      return elm?.linkId=== linkId;
    });
    return ifAdded;
  }
};
let addExistingLink=(linkId)=>{
  let theLink=selectlinks?.find((elm)=>{
  return elm?.linkId===linkId
  })
}
console.log(linkTitle)
  return (
    <>

    <div>
      {/* <Modal
        open={modal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >*/}

      <Slide
        in={addmore}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}
      >
        <Box sx={style2}>
        <div
        className={`h-[100%] w-[100%]  flex flex-col items-center  bg-[#f3f3f1]`}
        // style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
      >

      <Singlelink linkTitle={linkTitle} setLinkTitle={setLinkTitle}  setvalue1={setvalue1} value1={value1}  linkdata={linkdata} singlelink={singlelink} handlelink={handlelink} links={links} />
      <SavecontactBTN handlebtn={handlebtn} btn={btn} linkdata={linkdata} links={links} setLinkTitle={setLinkTitle} linkTitle={linkTitle}/>
        <div className="w-[100%] flex justify-center items-center bg-[white] h-[12%] relative">
          <h2 className="font-[500] text-2xl">Links Store</h2>
          <RxCross1
            className="text-2xl cursor-pointer absolute right-2"
            onClick={() => handleaddmore()}
          />
        </div>
        <div className="w-[100%] h-[100%] flex justify-center items-center ">
          <div className="max-w-[435px] w-[100%] flex-col h-[100vh]  flex  items-center overflow-y-scroll mt-10 ">
            <div className="w-[90%]   flex items-center flex-col bg-[white] rounded-[15px]  ">
          
          <div className="w-[100%] flex flex-col items-center">
          {dataArray.map(item => (
            <div key={item.id} onClick={() => {
              if (item.id != "0") {
              setLinkTitle(item.Title);
              handlelink(item);
              }else{
                handlebtn(item);
                setLinkTitle(item.Title);
              }
          }} className="w-[90%] cursor-pointer h-[52px] bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4" style={{backgroundColor:item?.id !="0" ?"#eaeef1":"#37e6a6",color:item?.id !="0" ?"black":"white",fontWeight:item?.id !="" ?"":"600"}} >
          
             {item?.id !="0" ?  <img  width="48" height="48" src={item.image} alt={item.name} />:<div className="w-[11%]"></div>}
              <p >{item.name}</p>
              <img src={plus} className="text-[#CBC8CA] w-[25px] h-[25px] mr-2" />
              {/* Your edit logic */}
             
            </div>
          ))}
          <br></br>
        </div>
         </div>
         <p className="mt-10 font-bold text-[18px]">Social</p>
         <div className="w-[90%] mt-2   flex items-center flex-col bg-[white] rounded-[15px]  ">
       <div className="w-[100%] flex flex-col items-center">
       {social.map(item => (
         <div key={item.id}  onClick={() => {
          setLinkTitle(item.Title);
          handlelink(item);
      }} className="w-[90%] cursor-pointer h-[52px] bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4">
           <img  width="48" height="48" src={item.image} alt={item.name} />
           <p>{item.name}</p>
           <img src={plus} className="text-[#CBC8CA] w-[25px] h-[25px] mr-2" />
           {/* Your edit logic */}
          
         </div>
       ))}
       <br></br>
     </div>
      </div>
      <p className="mt-10 font-bold text-[18px]">Professional</p>
         <div className="w-[90%] mt-2   flex items-center flex-col bg-[white] rounded-[15px]  ">
       <div className="w-[100%] flex flex-col items-center">
       {Professional.map(item => (
         <div key={item.id} onClick={() => {
          setLinkTitle(item.Title);
          handlelink(item);
      }} className="w-[90%] cursor-pointer h-[52px] bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4">
           <img width="48" height="48" src={item.image} alt={item.name} />
           <p>{item.name}</p>
           <img  src={plus} className="text-[#CBC8CA] w-[25px] h-[25px] mr-2" />
           {/* Your edit logic */}
          
         </div>
       ))}
       <br></br>
     </div>
      </div>
      <div className="w-[90%] mt-8  flex items-center flex-col justify-center  rounded-[10px]  ">
      <div  className="text-[#666] w-[100%] rounded-[15px] justify-center flex items-center h-[50px] bg-gradient-to-br from-yellow-100 to-yellow-200 ">
      Suggestions for new Links? <p className="undeline text-[#09C] ml-1">let us know here</p>
      </div>
      <div className="w-[100%] h-[52px]  mt-8 bg-[#37e6a6] rounded-xl flex justify-center items-center font-[600] text-[1.1em] text-white cursor-pointer relative">
      Done
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
      
        </Box>
      </Slide>

      {/*</Modal> */}
    </div>
    </>
  );
};

export default Addmore;
