import React, { useState } from 'react'
import './styles/FormAction.css'
import Home from './Home';
import { useNavigate } from 'react-router-dom';


function FormAction({setArr}) {
    let[user,setUser] = useState("");
    let[age,setAge] = useState(0);
    let[address,setAddress] = useState("");
    let[email,setEmail] = useState("");
    var temp = [[]]
    let det = []

    const navigator = useNavigate();
    const handleAdd=()=>{
        det.push(user.trim());
        det.push(age);
        det.push(address.trim());
        det.push(email.trim());

        temp.push(det);
        alert(`user ${user} added successfully`)
    }
    const jumpHome=()=>{
        temp.shift();
        console.log(temp);
        setArr(temp);
        navigator("/Home");
    }
    
  return (
    <div className='user-main'>
        <div className="user-info">
            <div className="user-input">
                <h3>Name</h3>
                <input type="text" onChange={(e)=>{setUser(e.target.value)}} required/>
            </div>
            <div className="user-input">
                <h3>E-mail</h3>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div className="user-input">
                <h3>Age</h3>
                <input type="text" onChange={(e)=>{setAge(e.target.value)}} required/>
            </div>
            <div className="user-input">
                <h3>Address</h3>
                <input type="text" onChange={(e)=>{setAddress(e.target.value)}} required/>
            </div>
            <div className="user-buttons">
            <button className="user-submit" onClick={jumpHome}>Submit</button>
            <button className="user-submit" onClick={handleAdd}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default FormAction