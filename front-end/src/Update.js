import React, { useState } from "react";
import { alter } from "./API";

export const Update=(annamalai)=>{

    //alert(JSON.stringify(annamalai))

    const[pos,setPos]=useState(annamalai.who)

    const[person,setPerson]=useState({
        "resName":annamalai.mention.resName,
        "resPay":annamalai.mention.resPay,
        "resArea":annamalai.mention.resArea,
        "resSkills":annamalai.mention.resSkills
    })

    const gopi=()=>{
        alter(pos,person)
        alert("Updated")
    }
    const dhana=()=>{
        alert("Rejected")
    }

    const track=(manoj)=>{
        //console.log(manoj.target.value);
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
        //console.log(JSON.stringify(person))
    }

    return(
        <>
            <div className="container-fluid mt-5">
                <h1 className="text-center text-info display-4 text-uppercase font-monospace">Edit Recruitment</h1>
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
                                    type="text"
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
                        
                        <div className="form-group">
                            <label>Resource person skills</label>
                            <textarea className="form-control" 
                            name="resSkills" 
                            value={person.resSkills} 
                            onChange={track}>

                            </textarea>
                        </div>

                        <div className="mt-4 row justify-content-around">
                            <button onClick={gopi} className="col-2 btn btn-outline-success">Change</button>
                            <button onClick={dhana} className="col-2 btn btn-outline-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}