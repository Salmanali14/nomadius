import { Box, Modal, Switch, styled } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import prfl from "../imgs/prfl.png";
import nomadius from "../imgs/nomadius.jpg";
import Settings from "../components/Settings";
import { SiTicktick } from "react-icons/si";
import Offers from "../components/Offers";
import { GrFormSubtract } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import email from "../sociallinks/email.png"
import whatsp from '../sociallinks/whatsapp1.png'
import insta from '../sociallinks/instagram.png'

import Addmore from "../components/Addmore";
import { db } from "../components/firebaseConfig";
import { onValue, ref, set, update } from "firebase/database";

import { RxCross1 } from "react-icons/rx";
import tau from "../imgs/tau.png";
import aircard from "../imgs/aircard.png";

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
import EditsingleLink from "../components/EditsingleLink";
import { DotLoader, HashLoader } from "react-spinners";
import EditsaveButton from "../components/EditsaveButton";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import VCard from "vcard-creator";
import { useParams } from "react-router-dom";
import profile from "../imgs/22122640 (2).jpg"
const PreviewProfile = ({profilepreview ,handleprofileClose }) => {
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
  let [settings, setsettings] = useState(false);
  let [color,setColor]=useState("linear-gradient(to bottom right, #246967, #62d1ce)")
  let [edit, setEdit] = useState(false);


  let handleSettings = () => {
    setsettings(!settings);
  };

  let [offer, setoffer] = useState(false);
  let handleoffer = () => {
    setoffer(!offer);
  };
  let [addmore, setaddmore] = useState(false);
  const [links, setlinks] = useState();
  let handleaddmore = () => {
    setaddmore(!addmore);
  };
  let [editsave, seteditsave] = useState(false);
 
  let [value1,setvalue1]=useState("")
  const [linkTitle, setLinkTitle] = useState('');
  let [singleEdit, setsingleEdit] = useState(false);
  let [linkdata, setlinkdata] = useState({});
  let linkopen=(name,value)=>{
    if (name == "Call") {
      return `tel:${value}`;
    } else if (name == "Whatsapp") {
      return `https://api.whatsapp.com/send?phone=${value}`;
    } else if (name == "Custom") {
      return `${value}`;
    } else if (name == "E-mail") {
      return `mailto:${value}`;
    } else if (name == "Facebook") {
      return `${value}`;
    } else if (name == "Instagram") {
      return `https://www.instagram.com/${value}`;
    } else if (name == "LinkedIn") {
      return `${value}`;
    } else if (name == "Message") {
      return `sms:${value}`;
    } else if (name == "Contact") {
      return `tel:${value}`;
    } else if (name == "We chat") {
      return `https://wechat.com/${value}`;
    } else if (name == "Snapchat") {
      return `https://www.snapchat.com/add/${value}`;
    } else if (name == "Line") {
      return `${value}`;
    } else if (name == "Telegram") {
      return `https://t.me/${value}`;
    } else if (name == "Tiktok") {
      return `https://www.tiktok.com/@${value}`;
    } else if (name == "Twitter") {
      return `https://twitter.com/${value}`;
    } else if (name == "Signal") {
      return `signal://${value}`; 
    } else if (name == "Website") {
      return `${value}`;
    } else if (name == "Youtube") {
      return `${value}`;
    }else if (name == "Skype") {
      return `https://join.skype.com/invite/@${value}`;
    } else if (name == "Gmail") {
      return `mailto:${value}`;
    }else if (name == "Linkedin") {
      return `${value}`;
    }else if (name == "Twitch") {
      return `https://www.twitch.tv/${value}`;
    }else if (name == "Messenger") {
      return `${value}`;
    }else if (name == "Mastodon") {
      return `https://${value.instance}/@${value.username}`;
    }else if (name == "Calendly") {
      return `https://calendly.com/${value}`;
    }else if (name == "Github") {
      return `https://github.com/${value}`;
    }else if (name == "AppleStore") {
      return `${value}`;
    }else if (name == "CashApp") {
      return `${value}`;
    }else if (name == "Address") {
      return `${value}`;
    }else if (name == "Amazon") {
      return `${value}`;
    }else if (name == "Facetime") {
      return `${value}`;
    }
  }
  let handlesingleEdit = (item) => {
    if(edit){
      setsingleEdit(!singleEdit);
      setlinkdata(item)
    }else{
     window.open(linkopen(item?.name,item?.value))
    }
  };

  const dataArray = [
    { id: 1, name: "Email", image: email },
    { id: 2, name: "Whatsapp", image: whatsp },
    { id: 2, name: "Instagram", image: insta },
  ];


      



  const [profileImage, setProfileImage] = useState('');
  const [loading, setLoading] = useState(true);
let [userdata,setUserdata]=useState("")

const getSingleChild = () => {
  const starCountRef = ref(db, `User/${currentUser}`)

  onValue(starCountRef, async (snapshot) => {
    setLoading(true)
    const data = await snapshot.val();
    // console.log(data);
    setUserdata(data)
  setProfileImage(data?.profileImage)

  if (data?.links) {
    setlinks(Object.values(data.links));
  } else {
    setlinks([]); // or handle the case where links are missing in another appropriate way
  }
  
    setColor(data?.colors);
    setLoading(false)
  });
};
useEffect(() => {
  getSingleChild()
 
}, []);
const handleColorChange = async (color) => {
  if (color) { 
      // Update the color state
      setColor(color);

      try {
          // Get the reference to the user's document
          const userRef = ref(db, `User/${currentUser}`);
          
          // Update the 'colors' field in the document
          await update(userRef, { colors: color }); 

          console.log("Color saved to Firebase");
      } catch (error) {
          console.error("Error saving color to Firebase:", error);
      }
  } else {
      console.error("Color is undefined");
  }
}
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
    const[selectlinks,setselectlinks]=useState([])
    useEffect(() => {
      let getdata = async () => {
      const starCountRef = ref(db,`User/${currentUser}/links/`);
      onValue(starCountRef, async (snapshot) => {
      let fetchdata = await snapshot.val();
      console.log(fetchdata)
      if(typeof fetchdata==="object"){
      setselectlinks(Object.values(fetchdata));
      }
      });
      };
      getdata();
    },[])
    const removeLink = (linkData, currentUser, allLinks,) => {
      if (allLinks) {
        let remainingLinks = allLinks.filter((elm) => {
          return elm.id != linkData.id;
        });
    
        set(ref(db, `User/${currentUser}/links/`), remainingLinks).then(() => {
          alert("Link deleted successfully")
          setLinkMediaModalOpen(false);
          updateLinks();
        });
      }
    };
   
    
    
    let handleeditsave = (item) => {
      seteditsave(!editsave);
      setlinkdata(item)
    };
    let [base64img, setbase64img] = useState("");
    useEffect(() => {
      let cnvrtTo64 = async () => {
        const base64 = await fetch(profileImage)
          .then((response) => response.blob())
          .then((blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            return new Promise((res) => {
              reader.onloadend = () => {
                res(reader.result);
              };
            });
          });
        setbase64img(base64);
      };
      cnvrtTo64();
    }, [profileImage]);
    console.log(base64img)
    let downloadVcf = async () => {
      // Define a new vCard
      const myVCard = new VCard();
  
      // Some variables
      const firstname = userdata?.fullname;
      const lastname = userdata?.lastName;
    
      const additional = "";
      const prefix = "";
      const suffix = "";
  
      myVCard
        .addName(lastname,firstname, additional, prefix, suffix)
        .addJobtitle(userdata?.jobtitle)
        .addCompany(userdata?.company)
        .addEmail(userdata?.email)
        .addPhoneNumber(userdata?.phone)
        .addPhoto(base64img.slice(22), "jpeg")
        .addAddress(userdata?.location)
        .addNote("From Nomadius");
  
        links?.map((elm) => {
          myVCard.addSocial(
            elm?.value,
            elm?.name
          );
      });
  
      const vcardData = myVCard.toString();
      const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "UpGraving.vcf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const handleClicklink = (item) => {
      if (item?.linkId !== 0) {
        setLinkTitle(item?.title);
        setvalue1(item?.value);
        handlesingleEdit(item);
      } else if(!edit && item?.linkId == 0) {
        downloadVcf()
      }else{
        handleeditsave(item);
        setLinkTitle(item?.title);
      }
    }
console.log(profilepreview)
  return (
    <>
    <div>
     
      <Slide
        in={profilepreview}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}

      >
        <Box  sx={style2}>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }} className="loading-screen">    
          <HashLoader color="#36d7b7" />
                </div>
              ) : (  
                 
                
                  
          
          
          
              
            
                     
                    
                  <div
            className={` w-[100%] h-[100%]   flex flex-col items-center relative  bg-[#f3f3f1]`}
            style={{
                background:userdata?.colors,
             }}
          >
            <div className="w-[100%] flex justify-center items-center bg-[white] h-[12%] fixed top-0">
              <h2 className="font-[500] text-2xl">Preview Profile</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handleprofileClose()}
              />
            </div>
            
                <div className="max-w-[435px] w-[100%] mt-[70px]  h-[100%] flex justify-center overflow-y-scroll ">
                  <div className="w-[90%] mt-[100px] min-h-[400px] h-max  bg-white rounded-xl flex flex-col items-center">
                    <div className="w-[95%] flex  justify-center mt-2">
                     
                      <div className="relative h-[100px] w-[166px]">
                        <div className="h-[166px] w-[166px] rounded-full flex justify-center items-center border-[7px] border-[#ededed] absolute top-[-85px]">
                          <img
                            src={userdata?.profileImage?userdata?.profileImage:profile}
                            className="h-[100%] w-[100%] rounded-full object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-[600] text-[22px]">{userdata?.fullname} {userdata?.lastName}</h2>
                    <p className="text-[1.1em] text-[#00C084] text-center">
                    {userdata?.jobtitle}
                    </p>
                    <div className="w-[85%]  border-t-[2px] mt-3 flex justify-center">
                      <p className="w-[95%] text-left text-[14px] font-[500] text-[#666] mt-1">
                      {userdata?.bio}
                      </p>
                    </div>
          
                    <div className="w-[100%] flex flex-col items-center ">
                    <div className="w-[100%] flex flex-col items-center">
                    {links?.map(item => (
                      <div key={item?.id} onClick={()=>handleClicklink(item)}  className="w-[85%] h-[52px]  cursor-pointer bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4"  style={{
                      backgroundColor: item?.linkId !== 0 ? "#eaeef1" : item?.bgcolor,
                      color: item?.linkId !== 0 ? "black" : item?.color,
                      fontWeight: item?.linkId !== 0 ? "normal" : "600"
                  }} >
                    {item?.linkId !="0" ?  <img onClick={() => {
                      setLinkTitle(item?.title)
                      setvalue1(item?.value)
                      handlesingleEdit(item);
                  }} width="48" height="48" src={returnIcons(item?.linkId)} alt={item?.name} />:<div className="w-[11%]"></div>}
                        <p onClick={()=>handleClicklink(item)}>{item?.title}</p>
                        <FiMenu onClick={()=>handleClicklink(item)} className="text-[#CBC8CA] w-[25px] h-[25px] mr-2" />
                        {/* Your edit logic */}
                        {edit && (
                          <div  onClick={() => removeLink({ name: item.name, linkId: item.linkId,image:item.image, value: item.value,title:item.title,id:item.id,placeholder:item.placeholder }, currentUser, links)} className="flex justify-center items-center w-[20px] h-[20px] rounded-[50%] bg-black absolute left-[-8px] top-[-8px]">
                            <GrFormSubtract  className="text-[white] w-[15px] h-[15px] " />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                 
                    </div>
                 
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
          
                 <br />
                <br />
           
            
               
              </div>
             
          
              )}
           
          
         
      
              </Box>
      </Slide>

      {/*</Modal> */}
    </div>
    </>
  );
};

export default PreviewProfile;
