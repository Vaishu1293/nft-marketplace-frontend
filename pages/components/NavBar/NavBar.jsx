import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// IMPORT REACT ICONS
import { Notifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';


// INTERNAL IMPORT
import Style from './NavBar.module.css';
import { Discover, Notification, HelpCenter, Profile, Sidebar,Button } from '../components.index';
import images from '../../../img';
const NavBar = () => {

//   ---- USESTATE

const [discover, setDiscover] = useState(false);
const [help, setHelp] = useState(false);
const [notification, setNotification] = useState(false);
const [profile, setProfile] = useState(false);
const [openSideMenu, setOpenSideMenu] = useState(false);

//  Video left at 32:48 video 3

  return (
    <div className='{Style.navbar'>
        <div className='{Style.navbar_container}'>
            <div className='{Style.navbar_container_left}'>
                <div className='{Style.logo}'>
                    <Image src={images.logo} alt='NFT MARKET PLACE' width={100} height={100} />
                </div>
                <div className='{Style.navbar_container_left_box_input_box}'>
                    <input type='text' placeholder="Search NFT"/>
                    <BsSearch onClick={() => {}} className='{Style.search_icon}'/>
                </div>
            </div>
            
            <div className='{Style.navbar_container_right}'>
                <div className='{Style.navbar_container_right_discover'>
                    <p onClick={(e) => {}}>Discover</p>
                    <div className='{Style.navbar_container_right_discover_box}'>
                        <Discover/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
