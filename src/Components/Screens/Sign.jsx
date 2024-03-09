// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Sign() {
const [credentials, setCredentials]= useState({name:"", lastName:"", email:"",password:"", mobile_no:"", location:""})
  const handleFormSubmit=()=>{
    console.log(credentials)
    // fetch('http://localhost:3000/api/register').then((response)=>{
    //   if(response.ok){
    //     return response.json()
    //   }
    //   else{
    //     throw new Error(response.statusText)
    //   }

    // }).then((data)=>{
    //   console.log(data)

    //   }
    // ).catch((err)=>{
    //   console.log(err)

    // })
  }
  const onChange=(e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className="p-5">
      
      <div>Registration Form</div>
      <form className="w-25 " onChange={handleFormSubmit}>
      <div className="form-group ">
        
    <label >First Name</label>
    <input type="text" className="form-control"   name="name" placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >lastName</label>
    <input type="text" className="form-control" onChange={onChange} name="lastName" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control"  onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  onChange={onChange} name="password" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label >Mobile Number</label>
    <input type="number" className="form-control"  name="mobile_number" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Location</label>
    <input type="address" className="form-control" onChange={onChange}  name="location" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link  className="btn btn-success" to="/login">Login</Link>
</form>
{credentials.name}
{credentials.sirName}
{credentials.email}
{credentials.password}
{credentials.location}
{credentials.mobile_no}

{/* {credentials} */}
    </div>
  )
}
