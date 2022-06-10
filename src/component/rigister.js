import { useState } from "react";
import axios from "axios";
const Register = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [confirmPassword,setConfirmPassword]=useState("");
    const [country,setCountry]=useState("");
    const [gender,setGender]=useState("");

    
    const registerCustomer=(e)=>{
        e.preventDefault();  // Stops the form from refreshing
        const data={
            username:username,
            email:email,
            password:password,
           
        }
        axios.post("http://localhost:5000/user/insert",data).
        then(res=>{
            console.log(res);
        }).catch(err=>{ console.log(err);}          
        )
    }

    return(
        <>
        <div className="container">
    <h1>Register Page</h1>
    
    <label>{gender}</label>
    <label>{country}</label>
    <div className="form-group">
        <label>UserName</label>
        <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}></input>

       < label>Email</label>
     
        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

        
        <div className="form-group container">
            
            <label>Gender</label>
          <label>  <input
            type="radio"
            name="gen"
            value="Male"
            onChange={(e)=>setGender(e.target.value)}/>
            Male</label>
            <label> 
            <input
            type="radio"
            name="gen"
            value="FeMale"
            onChange={(e)=>setGender(e.target.value)}/>Female   </label>
          

            
              

           
            </div>

       <div className="form-group">
       <br></br>
        <label className="">Select your country</label>
        <select onChange={(e)=>setCountry(e.target.value)}>
            <option >nepal</option>
            <option >india</option>
            <option >china</option>
            <option >usa</option>
        </select>

           </div>
        <label>Password</label>
        <p>{password}</p>
        <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

        <label>Confirm Password</label>
        <input type="password" className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>

        <button className="btn btn-primary" onClick={registerCustomer} >Register</button>


    </div>
    </div>
        </>

    )
};


export default Register;
