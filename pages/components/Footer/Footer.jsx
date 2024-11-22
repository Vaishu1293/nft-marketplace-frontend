import React from "react";
import Image from "next/image";
import { 
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp
  } from "react-icons/ti";
import {RiSendPlaneFill} from 'react-icons/ri';

//  Internal Import
import Style from './Footer.module.css';
import images from '../../../img';
import Discover from "../NavBar/Discover/Discover";
import HelpCenter from "../NavBar/HelpCenter/HelpCenter";

const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image src={images.logo} alt="footer_logo" height={100} width={100}/>
                    <p>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                    </p>
                    <div className={Style.footer_social}>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialTwitter/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                        <a href="#">
                            <TiSocialInstagram/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer