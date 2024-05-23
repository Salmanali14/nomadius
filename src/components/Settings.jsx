import { Box, Modal, Switch, styled } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useEffect, useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { push, ref, serverTimestamp, update } from "firebase/database";
// import { getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import prfl from "../imgs/prfl.png";
import email from "../sociallinks/email.png"
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Snapchat from '../sociallinks/snapchat.png'
import Mastodon from '../sociallinks/mastodon.svg'
import Twitch from '../sociallinks/twitch.svg'
import Line from '../sociallinks/line.png'
import Signal from '../sociallinks/signal.svg'
import GitHub1 from '../sociallinks/github-square.svg'
import LinkedIn from '../sociallinks/linkedin.png'
import Calendly from '../sociallinks/Calendly.svg'
import { RxCross1 } from "react-icons/rx";
import tau from "../imgs/tau.png";
import aircard from "../imgs/aircard.png";
import { LuPlusCircle } from "react-icons/lu";
import { GrSubtractCircle } from "react-icons/gr";
import { equalTo, onValue, orderByChild, query, ref, remove, set, update } from "firebase/database";
import { db, storage } from "./firebaseConfig";
import { uploadString, ref as sRef,getDownloadURL } from "firebase/storage";
import {  useNavigate, useParams } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import profile2 from "../imgs/22122640 (2).jpg"
import Cropper from "./Cropper";
import ItemPreview from "./ItemPreview";
import { Button, Typography } from '@mui/material';
// import "../../App.css";
import { IoCloseSharp } from "react-icons/io5";

const Settings =({ settings, handleSettings,userdata,profileImage,setProfileImage,setUserdata,bggcolor }) => {
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
  let [myprflimg, setmyprflimg] = useState(null);
let [cropPrfl, setCropPrfl] = useState({
  unit: "%",
  x: 50,
  y: 50,
  width: 25,
  height: 25,
});
  const profileInputRef = useRef(null);
  const [showProfileUpload, setShowProfileUpload] = useState(true);
  const  currentUser  = localStorage.getItem("useruid")
  let [cropModal, setcropModal] = useState(false);
  const [profile, setProfile] = useState('');
  const [key, setKey] = useState('');
  const [messagevalue, setMessagevalue] = useState('');
  const handleProfileLuPlusCircleClick = () => {
    profileInputRef.current.click();
  };
  let handlePrflImageChange = (event) => {
    // profileImage
    setProfile("");
    const { files } = event.target;
  
    // setKey(key + 1);
    if (files && files?.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setProfile(reader.result);
        setKey(key+1)
        setcropModal(true);
      });
    } else {
      // If no file selected (e.g., user canceled cropping), clear the input field
      event.target.value = null;
    }
  };
  const handleProfileDelete = () => {
    setProfileImage("");
    setShowProfileUpload(true);
    setShowProfileDelete(false);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    let returnIfHttps = (string) => {
      if (string != "") {
        if (string.slice(0, 4) === "http") {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    };
  
    update(ref(db, `User/${currentUser}`), {
      ...userdata,
      profileImage:profileImage,
    }).then(() => {
      // Handle success
      if (returnIfHttps(profileImage) === false) {
        let name = 'profileimg' + currentUser;
        const storageRef = sRef(storage, name);
        uploadString(storageRef, profileImage.slice(23), "base64", {
          contentType: "image/png",
        })
          .then(() => {
            console.log("img testing");
            getDownloadURL(storageRef)
              .then((URL) => {
                // console.log(URL)
                update(ref(db, `User/${currentUser}`), { profileImage: URL });
                setProfileImage("");
                // window.location.reload();
              })
              .catch((error) => {
                console.log(error);
              });
            // setimg(null)
          })
          .catch((error) => {
            console.log(error);
          });
       
      }
    }).catch((error) => {
      console.error('Error updating user data:', error);
    });
   
    toast.success("Information Changing successfully!");
    handleSettings()

  };
  function truncateText(text, maxLength) {
    if (text?.length <= maxLength) {
      return text;
    } else {
      return text?.slice(0, maxLength) + '...';
    }
  }
let Navigate=useNavigate()
  let handleforgat =()=>{
    Navigate("/forgot")
  }

  const [isOnline, setIsOnline] = useState();
  const getSingle = () => {
    const starCountRef = ref(db, `User/${currentUser}`)
  
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val();
      setIsOnline(data?.toggle);
    });
  };
  useEffect(() => {
    getSingle()
   
  }, []);

const toggleOnlineStatus = () => {
  setIsOnline(!isOnline);
};

const updateOnlineStatus = () => {
  // Use the current state directly
  const newOnlineStatus = isOnline;
  
  update(ref(db, `User/${currentUser}`), { toggle: newOnlineStatus })
    .then(() => {
      console.log('Online status updated successfully in Firebase:', newOnlineStatus);
      
    })
    .catch((error) => {
      console.error('Error updating online status in Firebase:', error);
    });
};

useEffect(()=>{
  if(isOnline !=null || isOnline !=undefined){
    updateOnlineStatus()
  }
},[isOnline])
const aircardData = [
  {
    id: 1,
    title: "Muhammad's Aircard",
    imageUrl: tau, // Replace with actual image URL
    linkedText: "Linked to your account 64 days ago"
  },
  {
    id: 2,
    title: "Another Aircard",
    imageUrl: aircard, // Replace with actual image URL
    linkedText: "Linked to your account 45 days ago"
  },
  // Add more items as needed
];

let[setuplost,setSetuplost]=useState(true)
const [enablelost,setEnablelost]=useState(false)
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

let [Product,setProduct]=useState([])
const getSingleChild = () => {
  const starCountRef = query(
    ref(db, "/Product"),
    orderByChild("userId"),
    equalTo(currentUser)
  );

  onValue(starCountRef, async (snapshot) => {
    const data = await snapshot.val();
    setProduct(Object.values(data))
  });
};
useEffect(() => {
  getSingleChild()
 
}, []);

let returnIcons=(linkId)=>{
  if (linkId===1) {
      return email
  }else if (linkId===2){
    return whatsp
  }else if (linkId===3){
    return call
  }else if (linkId===4){
    return Message
  }else if (linkId===5){
    return website
      } else if (linkId===6){
        return map
          }else if (linkId===7){
            return link
              }
              else if (linkId===8){
                return facebook
                  }
                  else if (linkId===9){
                    return insta
                      }
                      else if (linkId===10){
                        return wechat
                          }
                          else if (linkId===11){
                            return Line
                              }
                              else if (linkId===12){
                                return Signal
                                  }
                                  else if (linkId===13){
                                    return twitter
                                      }else if (linkId===14){
                                        return titok
                                          }else if (linkId===15){
                                            return telegram
                                              }else if (linkId===16){
                                                return youtube
                                                      }else if (linkId===17){
                                                        return Snapchat
                                                          }else if (linkId===18){
                                                            return Twitch
                                                              }else if (linkId===19){
                                                                return Mastodon
                                                                  }else if (linkId===20){
                                                                    return Calendly
                                                                      }else if (linkId===21){
                                                                        return LinkedIn
                                                                          }else if (linkId===22){
                                                                            return GitHub1
                                                                              }
    }
    const [selectedLinks, setSelectedLinks] = useState([]);

    // const handleChooseLink = (id) =>{
    //   setSelectedLinkId(id);
    // };

    const checkIfAdded=(id)=>{
      const result=selectedLinks?.some((link)=>{
return link?.linkId===id
      })
      return result
    }

    const addRemoveLink=(link)=>{
      const result=selectedLinks?.some((elm)=>{
        return elm?.linkId===link?.linkId
              })

     const remainingLinks=selectedLinks?.filter((elm)=>{
                return elm?.linkId!=link?.linkId
                      })
      if(result){
        setSelectedLinks([...remainingLinks])
      }else{
        setSelectedLinks([...selectedLinks,link])
      }
     
    }
    
    console.log(selectedLinks)
let [slectedid,setSelectedID]=useState("")
const handlesetupLostmode = (id) => {
  setSelectedID(id)
  setSetuplost(false)
  setEnablelost(true)
    setMessagevalue("")
    setSelectedLinks([])
};
const handlecancel=()=>{
  setSetuplost(true)
  setEnablelost(false)
}


const handleclosecropper =()=>{

  setcropModal(false)
 }
 const url = window.location.href;
let[preview2,setPreview2]=useState(false)
let[previewdata,setPreviewData]=useState(false)
 let handlePrev=(data)=>{
  setPreview2(!preview2)
  setPreviewData(data)
 }

 const additem = (linkData, currentUser, allLinks) => {
  setEnablelost(false)
  if (allLinks) {
    let index = allLinks?.findIndex((elm) => {
      return elm?.id === linkData?.id;
    });
 
     update(ref(db, `Product/${linkData?.id}`), { ...linkData }).then(() => {
    toast.success("Lost mode active");
    });
  
  }
};

const disablelost = (linkData, currentUser, allLinks) => {

  if (allLinks) {
    let index = allLinks?.findIndex((elm) => {
      return elm?.id === linkData?.id;
    });
 
     update(ref(db, `Product/${linkData?.id}`), { lostmode:false, }).then(() => {
    toast.success("Disable lost mode");
    });
  
  }
};
const [openModal, setOpenModal] = useState(false);
const [logout, setLogout] = useState(false);
const [deleteaccount, setDeleteaccount] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const handleOpenModal = (product) => {
  setOpenModal(true);
  setSelectedProduct(product);
};
let nevigate=useNavigate()
const handlelogoutmodal=()=>{
  setLogout(true)
}
const handlelogout=()=>{
  localStorage.removeItem("useruid");
  nevigate("/signin")
}

const handledelete=()=>{
  setDeleteaccount(!deleteaccount)
}

const handleDeleteConfirm = async () => {
  if (selectedProduct) {
    try {
      await remove(ref(db, `/Product/${selectedProduct.id}`));
      setProduct((prevProducts) =>
        prevProducts.filter((product) => product.id !== selectedProduct.id)
      );
      handleCloseModal()
      toast.success("Item disconneted successfuly")
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsModalOpen(false);
      setSelectedProduct(null);
    }
  }
};


const handleCloseModal = () => {
  setOpenModal(false);
  setLogout(false)
};
  return (
    <>
    <div>
   
    <Cropper
    cropModal={cropModal}
    handleclosecropper={handleclosecropper}
    theimg={profile}
    myimg={myprflimg}
    setmyimg={setmyprflimg}
    setcrop={setCropPrfl}
    crop={cropPrfl}
    aspect={1 / 1}
    setReduxState={setProfileImage}
    isCircle={true}
  />
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
            style={{
              background:bggcolor,
        
            }}
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[50px] relative">
              <h2 className="font-[500] text-2xl">Settings</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handleSettings()}
              />
            </div>
         <ItemPreview bggcolor={bggcolor} previewdata={previewdata} handlePrev={handlePrev}  preview2={preview2}/>
            <div className="w-[100%] h-[87%] flex justify-center items-center">
              <div className="max-w-[435px] w-[100%] b h-[100%] flex  justify-center overflow-y-scroll ">
                <div className="w-[90%] h-[100%]  mt-4">
                  <h2 className="text-xl font-[500]">Profile</h2>
                  <div className="w-[100%] h-[550px] bg-white mt-2 rounded-2xl">
                    <div className="w-[100%] flex justify-center ">
                      <div className="h-[160px] w-[160px] rounded-full flex justify-center items-center border-[7px] border-[#ededed] mt-4">
                      <div className='profileDiv' style={{ position: 'relative' }}>
                      <img className="w-[150px] h-[150px] rounded-full object-cover" src={!profileImage?profile2:profileImage}  />
                            {showProfileUpload && (
                              <label htmlFor="profileUploadInput" className='profileEdit' style={{ position: 'absolute' }}>
                                <input key={key} id="profileUploadInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePrflImageChange} ref={profileInputRef} />
                               
                              </label>
                            )}
                            
                            {profileImage ? (
                              <GrSubtractCircle
                                style={{
                                  position: 'absolute',
                                  left: '100px',
                                  top: '0px',
                                  fontSize: '20px',
                                  color: 'red',
                                  cursor: 'pointer',
                                  background: 'white',
                                  borderRadius: '50%'
                                }}
                                onClick={handleProfileDelete}
                              />
                            ) : (
                              <LuPlusCircle
                                style={{
                                  position: 'absolute',
                                  left: '100px',
                                  top: '0px',
                                  fontSize: '20px',
                                  color: '#726f6f',
                                  cursor: 'pointer',
                                  background: 'white',
                                  borderRadius: '50%'
                                }}
                                onClick={handleProfileLuPlusCircleClick}
                              />
                            )}
                          </div>
                      </div>
                    </div>
                    <div className="w-[100%] flex flex-col items-center mt-6">
                      <div className="w-[90%] flex justify-between items-center ">
                        <input
                          type="text"
                          className="w-[48%] h-[40px] outline-none border-b-2"
                          placeholder="First Name"
                          value={userdata?.fullname} onChange={(e)=>setUserdata({...userdata,fullname:e.target.value})} 
                        />
                        <input
                          type="text"
                          className="w-[48%] h-[40px] outline-none border-b-2"
                          placeholder="Last Name"
                          value={userdata?.lastName} onChange={(e)=>setUserdata({...userdata,lastName:e.target.value})}
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <input
                          type="text"
                          className="w-[100%] h-[40px] outline-none border-b-2"
                          placeholder="Job position"
                          value={userdata?.jobtitle} onChange={(e)=>setUserdata({...userdata,jobtitle:e.target.value})}
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <input
                          type="text"
                          className="w-[100%] h-[40px] outline-none border-b-2"
                          placeholder="Company"
                          value={userdata?.company} onChange={(e)=>setUserdata({...userdata,company:e.target.value})}
                        />
                      </div>

                      <div className="w-[90%] mt-7">
                        <p>Bio</p>
                        <textarea
                          name=""
                          id=""
                          className="w-[100%] pl-[2%] h-[100px] outline-none border-2 rounded-md mt-1 resize-none"
                          placeholder="Company"
                          value={userdata?.bio} onChange={(e)=>setUserdata({...userdata,bio:e.target.value})}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div  className="w-[100%] flex justify-center items-center mt-5">
                    <h2 onClick={handleforgat} className="w-[100%] font-[500] text-[18px] text-[white] cursor-pointer">
                      <button className="w-[100%] h-[50px] rounded-[15px] bg-[#37E6A6]">Change your Password</button>
                    </h2>
                  </div>
                  <h2 className="text-xl font-[500] mt-6">Your short url</h2>
                  <div className="w-[100%] h-[350px] bg-white mt-2 rounded-2xl flex flex-col justify-between items-center">
                    <div className="w-[100%] flex justify-center mt-3">
                      <div className="w-[85%]  border-b-[2px] h-[40px] flex justify-center items-center font-[500] text-[0.9em]">
                  {truncateText(url,40)}
                      </div>
                    </div>
                    <div className="h-[180px] w-[180px] flex justify-center items-center">
                      <QRCode
                          value={url}
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
                      <IOSSwitch 
                      sx={{ m: 1 }}  
                      onChange={() => {
                        toggleOnlineStatus()
                      }}
                      checked={isOnline}
                    />
                    </div>

                    <div
                      className="w-[92%]
                    "
                    >
                      <input
                        type="text"
                        className="w-[95%] outline-none"
                        placeholder="Paste your link here"
                        value={userdata?.redirectLink} onChange={(e)=>setUserdata({...userdata,redirectLink:e.target.value})}
                      />
                    </div>

                    <div
                      className="w-[92%] flex justify-between items-center
                    "
                    >
                      <p className="text-[#666] text-[1em] font-[600]">
                        Redirect to Contact Card?
                      </p>
                      <IOSSwitch sx={{ m: 1 }}  onChange={() => {
                        toggleOnlineStatus()
                      }}
                      checked={!isOnline} />
                    </div>
                  </div>

                  <h2 className="text-xl font-[500] mt-7">Your items</h2>
                  <div className="aircard-list">
                  {Product?.map((aircard) => (
                    <div key={aircard?.id} className="w-[100%] bg-white mt-6 rounded-2xl relative flex flex-col justify-between items-center">
                    <div onClick={() =>handleOpenModal(aircard)} className="flex justify-center absolute top-3 right-2 items-center w-[25px] h-[25px] rounded-full bg-[#CCCCCC]">
                    <IoCloseSharp className="text-[white] text-[25px]"/>
                    </div>
                      <div className="w-[100%] flex justify-center mt-3">
                        <div className="w-[85%] border-b-[2px] h-[40px] flex justify-center items-center font-[500] text-[1em]">
                          {aircard?.title}
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
                        {aircard?.linkdays}
                      </p>
                
                   
                
                      {enablelost && slectedid===aircard?.id &&
                        <>
                        <p className="font-[600] text-[16px] mt-5 text-[#999] flex justify-center items-center w-[100%]">
                        Your message to the person who finds it:
                        </p>
                        <textarea type="text" value={messagevalue}   onChange={(e)=>setMessagevalue(e.target.value)} className="min-h-[120px] mb-5 p-2 mt-5 outline-none rounded-[10px] border-2 boder-[#999] w-[90%]"/>
                        <p className="font-[600] text-[16px] mt-2 mb-2 text-[#999] flex justify-center items-center w-[100%]">
                       Select how they can get in touch:
                        </p>
                        {selectlinks?.filter(item => item?.linkId == 1 || item?.linkId == 2 || item?.linkId == 3 || item?.linkId == 4 || item?.linkId == 6 || item.linkId == 9)
                        .map(item => (
                          <div key={item?.id}  className="w-[90%] h-[52px] cursor-pointer bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4" >
                         <img  width="48" height="48" src={returnIcons(item?.linkId)} alt={item?.name} />
                            <p>{item?.title}</p>
                            <div  onClick={() => addRemoveLink(item)} 
                            style={{ backgroundColor: checkIfAdded(item?.linkId) ? '#37E6A6' : '' }}
                             className="border-[#999] border-2 w-[20px] h-[20px] rounded-full mr-2">
                            </div>
                          </div>
                        ))}
                        </>
                      }
              
                        <>
                       
                      {!aircard?.lostmode && !enablelost&& 
                      <div onClick={() => handlesetupLostmode(aircard.id)} className="w-[80%] mt-3 h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                        Setup Lost Mode
                      </div>}
                      
                      </>
                      
                      {enablelost && slectedid===aircard?.id &&
                        <>
                        <div onClick={() => additem({userId:currentUser,message:messagevalue,connectlink:selectedLinks,lostmode:true,id:aircard?.id }, currentUser, Product)} className="w-[80%] mt-5 h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                          Enable Lost Mode
                        </div>
                        <div onClick={() => handlecancel(aircard.id) } className="w-[80%]  h-[46px] border mb-[20px] bg-[#37e6a6] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                       Cancel
                      </div>
                      </>
                      }

                        {aircard?.lostmode && 
                          <>
                        <p className="font-[500] mt-5 mb-5 text-[15px] text-[#D44C3F]">Currently Lost</p>
                        <div onClick={()=> handlePrev(aircard)}  className="w-[80%] mt-3 h-[46px] border mb-[20px] bg-[#315E7D] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                          Preview Lost Page
                        </div>
                        <div onClick={() => disablelost({userId:currentUser,message:"",connectlink:"",lostmode:false,id:aircard?.id }, currentUser, Product)}  className="w-[80%]  h-[46px] border mb-[20px] bg-[#D44C3F] rounded-[10px] text-white font-[600] flex justify-center items-center cursor-pointer">
                         Disable Lost Mode
                      </div>
                      </>
                        }
                    </div>
                  ))}
                </div>

                  <div className="w-[100%] h-[66px] bg-white mt-6 rounded-xl flex  justify-center items-center gap-5">
                    <div onClick={handlelogoutmodal} className="w-[40%] h-[46px] bg-[#37e6a6] rounded-[10px] flex justify-center items-center text-white font-[500] cursor-pointer">
                      Log Out
                    </div>
                    <div onClick={handleFormSubmit} className="w-[40%] h-[46px] bg-[#506160] rounded-[10px] flex justify-center items-center text-white font-[500] cursor-pointer">
                      Done
                    </div>
                  </div>

                  <div className="w-[100%] flex justify-center items-center mt-6">
                    <p onClick={handledelete} className="cursor-pointer text-[1.2em] text-[white] w-[100%] font-[600]">
                    <button className="w-[100%] h-[50px] rounded-[15px] bg-[#37E6A6]">Delete Account</button>
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
    <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 340,
            bgcolor: 'background.paper',
         outline:"none",
         borderRadius:"10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h7" component="h2" >
            Are you sure you want to disconnect this item?
          </Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
              No
            </Button>
            <Button variant="contained" color="primary" onClick={handleDeleteConfirm} >
            Yes
          </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={logout} onClose={handleCloseModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 340,
          bgcolor: 'background.paper',
       outline:"none",
       borderRadius:"10px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h7" component="h2" >
          Are you sure you want to logout this account?
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" color="secondary" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="contained" color="primary" onClick={handlelogout} >
          Yes
        </Button>
        </Box>
      </Box>
    </Modal>
    <Modal open={deleteaccount} onClose={handledelete}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 340,
        bgcolor: 'background.paper',
     outline:"none",
     borderRadius:"10px",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h7" component="h2" >
        Are you sure you want to delete this account?
      </Typography>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" color="secondary" onClick={handledelete}>
          No
        </Button>
        <Button variant="contained" color="primary" onClick={handledelete} >
        Yes
      </Button>
      </Box>
    </Box>
  </Modal>
    </>
  );
};

export default Settings;
