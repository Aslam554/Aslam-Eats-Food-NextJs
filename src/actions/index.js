"use server"

import connectToDB from "@/database"
import User from "@/models/User"
import Feeds from "@/models/Feeds"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import {cookies} from "next/headers"

export async function postAction(formData) {
  await connectToDB();
  try{
  let{ post} = formData
  const newlyCreatedPost = new Feeds({
    // username,
    post,
  });
  const savedPost = await newlyCreatedPost.save();

  if (savedPost) {
    return {
      success: true,
      data: JSON.parse(JSON.stringify(savedPost)),
    };
  } else {
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
 catch (error) {
  console.log(error);
  return {
    message: "Something error occured",
    success: false,
  };
}

 
}
export async function registerUserAction(formData) {
    await connectToDB();
    try {
      const { fname,lname, email, password } = formData;
  
      const checkUser = await User.findOne({ email });
      console.log(checkUser);
      if (checkUser) {
        return {
          success: false,
          message: "User already exists ! Please try with different email",
        };
      }
  
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
  
      const newlyCreatedUser = new User({
        fname,
        lname,
        email,
        password: hashedPassword,
      });
  
      const savedUser = await newlyCreatedUser.save();
  
      if (savedUser) {
        return {
          success: true,
          data: JSON.parse(JSON.stringify(savedUser)),
        };
      } else {
        return {
          success: false,
          message: "Something went wrong! Please try again",
        };
      }
    } catch (error) {
      console.log(error);
      return {
        message: "Something error occured",
        success: false,
      };
    }
  }
  

  export async function loginUserAction(formData) {
    await connectToDB();
    try {
      const { email, password } = formData;
  
      //check if user exists in DB
      const checkUser = await User.findOne({ email });
      if (!checkUser) {
        return {
          success: false,
          message: "User doesnot exist ! please sign up",
        };
      }
  
      //check if password is valid or not
      const checkPassword = await bcryptjs.compare(password, checkUser.password);
      if (!checkPassword) {
        return {
          message: "Password is incorrect please check",
          success: false,
        };
      }
  
      const createdTokenData = {
        id: checkUser._id,
        fname: checkUser.fname,
        lname: checkUser.lname,
        email: checkUser.email,
      };
  
      const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
        expiresIn: "1d",
      });
  
      
      const getCookies = cookies();
      getCookies.set("token", token);
  
      return {
        success: true,
        message: "Login is successfull",
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Something went wrong! please try again",
      };
    }
  }

export async function fetchPostData() {
   await connectToDB()
   const getUserFeeds = await Feeds.find();
   try{
    if (getUserFeeds) {
      return {
        success: true,
        data:JSON.parse(JSON.stringify(getUserFeeds)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured ! Please try again",
      };
    }
   }catch{
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  
   }
}

export async function fetchAuthUserAction() {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = getCookies.get("token")?.value || "";
    if (token === "") {
      return {
        success: false,
        message: "Token is invalid",
      };
    }

    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });
    
    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Some error occured ! Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong! please try again",
    };
  }
}

export async function logoutAction() {
  const getCookies = cookies();
  getCookies.set("token", "");
}


export async function checkEmailAction(formData) {
  await connectToDB();
  try {
    const { email} = formData;

    //check if user exists in DB
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        message: "User doesnot exist ! please sign up",
      };
    }
    else{
      return {
      sucess:true,
      message:"User exist in the database",
      };
    }
    
  }catch (error) {
    console.log(error);
    return {
      message: "Something error occured",
      success: false,
    };
  }
  }



  