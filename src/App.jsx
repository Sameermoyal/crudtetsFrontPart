import React, { useState,useEffect } from 'react'
import axios from 'axios'
function App() {
  const [allData,setAllData] =useState([])
  const [productName,setProductName]=useState("")
  
  const fetchData =async()=>{
   const response =await axios.get('http://localhost:3000/abc/get')
   console.log(">>>response>>",response)
   setAllData(response.data)
  }

  const deleteData =async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/abc/delete/${id}`);
      
      setAllData(allData.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }

  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      
    
    { allData.map((item)=>{
        return(
      <>
        <p key={item._id}>  ID : {item._id} </p>
        <p>Name : {item.name}</p>
        <button onClick={()=>deleteData(item._id)}>delete</button>
        </>
        
         
        )
      })}
    
     
    </div>
  )
}

export default App