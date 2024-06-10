import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData] = useState(
        {
            "firstname" : "",
            "lastname" : "",
            "college" : "",
            "dob"     : "",
            "course"  : "",
            "mobileNo" : "",
            "email" : "",
            "address" : ""

        }
    )

    const inputHandler = (event)=> {
        setData({...data, [event.target.name]:
            event.target.value })
        }

        const readValue = () => {
            console.log(data)
            axios.post(" https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response)
                    if(response.data.status=="success") {
                        alert("success")

                    }
                    else{
                        alert("Error")
                    }
                }
            ).catch()
        
    }
  return (
    <div>
<NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 ol-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="input-label" >First name</label>
        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />



    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label" >Last name</label>
            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">College</label>
        <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">DOB</label>
            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">Course</label>
            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Mob no</label>
            <input type="text" className="form-control" name='mobileNo' value={data.mobileNo} onChange={inputHandler}/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Email</label>
        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-lebel">Address</label>
        <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-primary" onClick={readValue}>Submit</button>

    </div>
</div>
    

        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent