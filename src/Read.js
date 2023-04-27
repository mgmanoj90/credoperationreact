import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Read() {
  const [data,setData ] =useState([]);
  const [newUpdateId,setNewUpdateId] = useState(0);
  const naviget = useNavigate()
   const getData = ()=>{
        axios.get(`https://6447dc647bb84f5a3e4b698c.mockapi.io/cred-Youtube`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
          })
        }
   
    useEffect(function(){
        getData()
    },[]);

    const handleDelete = (id)=>{
    axios.delete(`https://6447dc647bb84f5a3e4b698c.mockapi.io/cred-Youtube/${id}`)
    .then(()=>{
        getData()
    })
    }
    const handleUpdate = (id,name,email)=>{
      localStorage.setItem("id",id);    
      localStorage.setItem("name",name);    
      localStorage.setItem("email",email);
      naviget('/update')
    }
  return (
    <>
        <div className='container'>
            <div className='readHeader mt-5'>
                 <h3>Read</h3>
                 <Link to="/"><button className='btn btn-secondary btn-sm'>Create new form</button></Link>
                    
            </div>
            
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"><button className='btn btn-info'>Update</button></th>
      <th scope="col"><button className='btn btn-danger'>Delete</button></th>
    </tr>
  </thead>
  <tbody>
  {data.map((item)=>
    (
       
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td><button className='btn btn-info' onClick={()=>handleUpdate(item.id,item.name,item.email)}>Update</button></td>
          <td><button className='btn btn-info' onClick={()=>handleDelete(item.id)}>Delete</button></td>
        </tr>
      
    )
  )}
  </tbody>
  

</table>
        </div>
    </>
  )
}

export default Read