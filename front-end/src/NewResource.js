import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {create, list} from './API'
import { join } from "./Connect"
export const Recruite=()=>{
    //const[data,setData]=useState(initialization)
    // person['resName']
    // person.resName
    const[person,setPerson]=useState({
        "resName":"",
        "resPay":0,
        "resArea":"",
        "resSkills":new Array()
    })

    const tracks=(hey)=>{
        const{value}=hey.target
        person.resSkills.push(value)
    }

    const track=(manoj)=>{
        // extraction
        const{name,value}=manoj.target
        setPerson(
            (prev)=>{
                return{
                    ...prev,
                    [name]:value
                }
            }
        )
    }

    const gopi=async()=>{
        //alert("Hired "+JSON.stringify(person))
        //create(person)
        const yet=await join(person);
        alert(yet.data)
    }
    const dhana=()=>{
        alert("Rejected")
    }
    return(
        <>
            <div className="container-fluid mt-5">
                <h1 className="text-center text-info display-4 text-uppercase font-monospace">New Recruitment</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
                        <div className="form group">
                            <label>Resource Name</label>
                            <input type="text" 
                                name="resName" 
                                onChange={track}
                                value={person.resName}
                                placeholder="Name of the resource person"
                                className="form-control"
                            />
                        </div>
                        
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Resource Commercial</label>
                                <input
                                    onChange={track}
                                    type="number"
                                    value={person.resPay}
                                    name="resPay"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label>Resource Location</label>
                                <select name="resArea" 
                                    className="form-select" 
                                    onChange={track}
                                    value={person.resArea}>
                                    <option>Select Location</option>
                                    <option>Chennai</option>
                                    <option>Banglore</option>
                                    <option>Salem</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-check-inline">
                            <label className="me-sm-5 me-lg-5">Resource skill</label>
                            <input 
                                type="checkbox" 
                                name="java" 
                                onChange={tracks}
                                value="Java" 
                                className="form-check-input"/>Java
                            <input 
                                type="checkbox" 
                                name="python"
                                onChange={tracks}
                                value="Python"
                                className="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>Python
                            <input 
                                type="checkbox" 
                                name="javascript"
                                onChange={tracks}
                                value="Java Script" 
                                className="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>Java Script
                        </div>

                        <div className="mt-4 row justify-content-around">
                            <button onClick={gopi} className="col-2 btn btn-outline-success">Hire</button>
                            <button onClick={dhana} className="col-2 btn btn-outline-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}