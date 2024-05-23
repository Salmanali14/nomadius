import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { db } from './firebaseConfig';
import { useParams } from 'react-router-dom';
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
import Snapchat from '../sociallinks/snapchat.png'
import Mastodon from '../sociallinks/mastodon.svg'
import Twitch from '../sociallinks/twitch.svg'
import Line from '../sociallinks/line.png'
import Signal from '../sociallinks/signal.svg'
import GitHub1 from '../sociallinks/github-square.svg'
import LinkedIn from '../sociallinks/linkedin.png'
import Calendly from '../sociallinks/Calendly.svg'
import { RxCross1 } from 'react-icons/rx';
import Slide from "@mui/material/Slide";
import { Box } from '@mui/material';
export default function ItemPreview({preview2,handlePrev,previewdata,}) {
    let [userdata,setUserdata]=useState("")
    const [links, setlinks] = useState();
    let [color,setColor]=useState("linear-gradient(to bottom right, #246967, #62d1ce)")
    const  currentUser  = localStorage.getItem("useruid")
const getSingleChild = () => {
  const starCountRef = ref(db, `User/${currentUser}`)

  onValue(starCountRef, async (snapshot) => {
    const data = await snapshot.val();
    setUserdata(data)
  if (data?.links) {
    setlinks(Object.values(data.links));
  } else {
    setlinks([]); 
  }
  
    setColor(userdata);
  });
};
useEffect(() => {
  getSingleChild()
 
}, []);
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
let handopenLink = (item) => {
     window.open(linkopen(item?.name,item?.value))
  };
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
  return (
  <>
  <Slide
  in={preview2}
  direction="up"
  timeout={{ appear: 500, enter: 500, exit: 500 }}

>
  <Box  sx={style2}>
     <div
     className="w-[100%] h-[100%] flex justify-center items-center relative"
     style={{
        background:userdata?.colors,
       overflow: "hidden",
     }}
   >
   <div className="w-[100%] flex justify-center items-center bg-[white] h-[40px] fixed top-0">
              <h2 className="font-[500] text-2xl">Preview</h2>
              <RxCross1
                className="text-2xl cursor-pointer absolute right-2"
                onClick={() => handlePrev()}
              />
            </div>
     <div className="max-w-[435px] w-[100%]  h-[100%] flex justify-center overflow-y-scroll ">
     <div className="w-[90%] mt-[100px] min-h-[400px] h-max relative  bg-white rounded-xl flex flex-col items-center">
    <div className='flex justify-center items-center w-[100%] absolute top-[-65px]'>
    <img width="150" height="150" src="https://img.icons8.com/papercut/300/medium-risk.png" alt="medium-risk"/>
    </div>
   <p className='mt-[70px] font-[500] text-[22px]'>Item marked as lost</p>
   <p className='mt-[20px] text-[#999] font-[500] text-[14px]'>Message from the owner</p>
   <div  className="text-[#666] mt-5 w-[90%] rounded-[15px] justify-start flex items-center  pl-3 pr-3 min-h-[60px] bg-gradient-to-br from-yellow-100 to-yellow-200 ">
  {previewdata?.message}
   </div>
   {previewdata?.connectlink?.filter(item => item.linkId == 1 || item.linkId == 2 || item.linkId == 3 || item.linkId == 4 || item.linkId == 6 || item.linkId == 9)
    .map(item => (
      <div key={item?.id} onClick={()=> handopenLink(item) }  className="w-[90%] h-[52px] cursor-pointer bg-[#eaeef1] rounded-xl flex justify-between items-center relative mt-4" >
     <img  width="48" height="48" src={returnIcons(item?.linkId)} alt={item?.name} />
        <p>{item?.title}</p>
    <div className='w-[11%]'></div>
      </div>
    ))}
     </div>
     </div>
     </div>
     </Box>
     </Slide>
  </>
  )
}
