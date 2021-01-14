import { SetFunctionName } from "es-abstract/es2019";
import React, { Component, useState } from "react";

export default function SignUp(){
    
    const [fname,setFname] = useInput('');
    const [lname,setLname] = useInput('');;
    const [password,setPassword] = useInput('');
    const [email,setEmail] = useInput('');

    function handleSubmit(e){
        e.preventDefault();
    }

    
    function useInput(initialValue){
        const [value,setValue] = useState(initialValue);
    
        function handleChange(e){
            setValue(e.target.value);
        }
    
        return [value,handleChange];
    }
    return (
        <div className= "auth-wrapper">
        <div className = "auth-inner">
        <form onSubmit = {handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" 
                    value = {fname} onChange = {setFname}
                />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" 
                    value = {lname} onChange = {setLname}
                />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                    value = {email} onChange = {setEmail}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                        value = {password} onChange = {setPassword}
                />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/Login">sign in?</a>
            </p>
        </form>
        </div>
        </div>
    );
}