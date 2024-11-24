import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

// INTERNAL IMPORT
import Style from './BigNFTSlider.module.css';
import images from '../../../img';
import Button from '../Button/Button';

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
        title: "Hello NFT",
        id: 1,
        name: "Vaishali",
        collection: "GYM",
        price: "00000064664 ETH",
        like: 243,
        image: images.user1,
        nftImage: images.nft_image_1,
        time: {
            days: 27,
            hours: 10,
            minutes: 11,
            seconds: 35
        }
    },
    {
        title: "Buddy NFT",
        id: 2,
        name: "Chandra",
        collection: "Home",
        price: "00000064664 ETH",
        like: 243,
        image: images.user2,
        nftImage: images.nft_image_2,
        time: {
            days: 27,
            hours: 10,
            minutes: 11,
            seconds: 35
        }
    },
    {
        title: "GYM NFT",
        id: 3,
        name: "Sharmila",
        collection: "GYM",
        price: "00000064664 ETH",
        like: 243,
        image: images.user3,
        nftImage: images.nft_image_3,
        time: {
            days: 27,
            hours: 10,
            minutes: 11,
            seconds: 35
        }
    },
    {
        title: "Home NFT",
        id: 4,
        name: "Pammy",
        collection: "HOME",
        price: "00000064664 ETH",
        like: 243,
        image: images.user4,
        nftImage: images.nft_image_4,
        time: {
            days: 27,
            hours: 10,
            minutes: 11,
            seconds: 35
        }
    }
  ];

  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image 
                        className={Style.bigNFTSlider_box_left_creator_profile_img}
                        src={sliderData[idNumber].image} 
                        alt="Profile Image" 
                        width={50} 
                        height={50} />
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}{""}</h4>
                            <span>
                                <MdVerified/>
                            </span>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                        {/* <div className={}>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider
