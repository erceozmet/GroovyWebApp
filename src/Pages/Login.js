import React, { Component, useState } from "react";
import axios from "axios";


export default function Login(){ 
    
    const [email,setEmail] = useInput('');
    const [password,setPassword] = useInput('');
    const [remember, setRemember] = useState(false)
    const [loading, setLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        
        //Validate form
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
            <h3>Sign In</h3>

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

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"
                    value = {remember} onChange = {()=> {setRemember(!remember)}}/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="/">password?</a>
            </p>
        </form>
            </div>
        </div>
    );
}