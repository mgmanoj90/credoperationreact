import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Update() {
    const[id,setId] = useState('');
    const[name,setName] =useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate()
    useEffect(()=>{
           setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
    },[]);
    const handleUpdate = (id)=>{
        axios.put(`https://6447dc647bb84f5a3e4b698c.mockapi.io/cred-Youtube/${id}`,
            {
                name:name,
                email:email
            },
        )
        navigate('/read')
    }
  return (
    <div className='container'>
        <div className='readHeader mt-5'>
                 <h3>Read</h3>
                 <Link to="/"><button className='btn btn-secondary btn-sm'>Create new form</button></Link>
                    
            </div>
        <form>
            <div className='container'>
            <h3 className='mt-5'>Create</h3>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                type="name" className="form-control" 
                placeholder="name" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Email </label>
                <input 
                value={email} 
                 onChange={(e)=>setEmail(e.target.value)} 
                type="email" 
                className="form-control"  
                placeholder="email" />
            </div>
            <button 
             onClick={()=>handleUpdate(id,name,email)} 
            className='btn btn-info'>Update</button>     
            </div>
        </form>
    </div>
  )
}

export default Update