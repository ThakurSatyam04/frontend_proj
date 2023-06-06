import React, { useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import bg_img from "../assets/Bg_Img.png"

const Signup = () => {

  const navigate = useNavigate();

const [user, setUser] = useState({
  name:"",
  email:"",
  password:"",
  confirmPassword:""
}) 

const handleChange =(e)=>{
  const{name,value} = e.target;
  setUser({
    ...user,
    [name]:value
  })
}

const handleSignUp = async(e)=>{
  e.preventDefault();
  try{
    const {name,email,password,confirmPassword} = user;
    if(name && email && password === confirmPassword){
     await axios.post("http://localhost:3001/api/auth/signup",user)
      .then(res =>{
        console.log(res)
        alert("Sign Up Successful, Please Login");
        navigate("/login");
      })
    }
    else{
      alert("please fill all the fields");
    }
  }catch(err){
    console.log(err);
  }
}

  return (
    <div>
      <section className="h-screen flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-blue-50">
      <div className="md:w-101/3 max-w-xl rounded-lg">
        <img className='rounded-lg shadow-md'
          src={bg_img}
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Sign Up</p>
        </div>

        <label>Name</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name="name" value={user.name} onChange={handleChange} type="text" placeholder="Enter Name" />

        <label>Email</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name="email" value={user.email} onChange={handleChange} type="text" placeholder="Email Address" />

        <label>Password</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />

        <label>Confirm Password</label>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" />

        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have account? <Link to="/login" className="text-red-600 hover:underline hover:underline-offset-4">Sign In</Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Signup
