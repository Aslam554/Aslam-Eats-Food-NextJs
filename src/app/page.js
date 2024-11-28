import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import Types from './components/Types';
import Services from './components/Services';
import Productsgrid from './components/Productsgrid';
import Banner from './components/Banner';
import Footer from './components/Footer';
import dosa from '@/assets/dosa.jpg';
import { fetchAuthUserAction, fetchPostData } from "@/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import Signout from "./components/signout";
// import Post from "./components/post";



const App = async () => {
  try {
    const currentUser = await fetchAuthUserAction();
    const userPost = await fetchPostData();

    console.log(currentUser, userPost);

    if (!currentUser?.success) {
      redirect("/signin");
     // return null;  // Ensuring no further rendering after redirection
    }

    return (

      <div className="w-[100vw] text-black p-[12px] text-[25px] ">
        <div className="flex items-center justify-between ">
          <h2>
            Hi, {currentUser?.data?.fname} {currentUser?.data?.lname}<br />
            Welcome to Aslam Eats Food Delvery Website Designed by Aslam Beg
          </h2>
        </div>

        <Header />
        <Signout />
        <Hero />
        <Category />
        <Types />
        <Services />
        <Productsgrid />
        <Banner />

        <Footer />
      </div>

    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <p>Something went wrong. Please try again later.</p>;
  }
}

export default App;
