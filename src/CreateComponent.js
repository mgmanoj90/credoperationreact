import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function CreateComponent() {
    const history  =useNavigate()
 const [name,setName] =  useState('')
 const [email,setEmail] =  useState('')
 const header = {"Acess-Control-Allow-Origin":"*"}
//  const [error,setError] = useState(false)
 const submitHandle = (e)=>{
    e.preventDefault();
   
    console.log("click")
    axios.post(`https://6447dc647bb84f5a3e4b698c.mockapi.io/cred-Youtube`, {
        name:name,email:email,
        header
    });
   history('/read')
 }
 

  return (
    // create a for all input value for all form
    <>
        
        <form>
            <div className='container'>
            <div className='readHeader mt-5'>
                 <h3>Read</h3>
                 <Link to="/Read"><button className='btn btn-secondary btn-sm'>detail</button></Link>
                    
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="name" className="form-control" placeholder="name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email </label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"  placeholder="email" />
            </div>
            <button onClick={submitHandle} className='btn btn-info'>Submit</button>     
            </div>
        </form>
    </>
  )
}

export default CreateComponent