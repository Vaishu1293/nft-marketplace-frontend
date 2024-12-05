import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

// INTERNAL IMPORTS

import Style from "@/styles/index.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Service from "./components/Service/Service";
import BigNFTSlider from "./components/BigNFTSlider/BigNFTSlider";
import Subscribe from "./components/Subscribe/Subscribe";
import Title from "./components/Title/Title";
import Category from "./components/Category/Category";
import Filter from "./components/Filter/Filter";
import NFTCard from "./components/NFTCard/NFTCard";
import Collection from "./components/Collection/Collection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        <div className={Style.homePage}>
          <HeroSection/>
          <Service/>
          <BigNFTSlider/>
          <Collection/>
          <Filter heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life,"/>
          <NFTCard/>
          <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
          <Category/>
          <Subscribe/>
        </div>
      }
    </>
  );
}

