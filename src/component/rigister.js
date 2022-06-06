import { useState } from "react";

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [confirmPassword,setConfirmPassword]=useState("");
    const [country,setCountry]=useState("");
    const [gender,setGender]=useState("");

    return(
        <>
        <div className="container">
    <h1>Register Page</h1>
    <p>{name}</p>
    <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}></input>

       < label>Email</label>
       <p>{email}</p>
        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

        
        <div className="form-group container">
            <label>{gender}</label>
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
        <label>{country}</label><br></br>
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

        <button className="btn btn-primary">Register</button>


    </div>
    </div>
        </>

    )
};
export default Register;