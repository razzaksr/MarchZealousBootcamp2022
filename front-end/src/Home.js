import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./API";
import { Recruite } from "./NewResource";

export const Home=()=>{

    const[tmpArray,setTmpArray]=useState([])
    const[createView,setCreateView]=useState(false)

    const hello=()=>{
        setTmpArray(list())
    }

    useEffect(()=>{
        hello()
    },[])

    return(
        <>
            <div className="container mt-5">
                {/* <button onClick={hello}>
                    View
                </button> */}
                {(createView)?
                <>
                    <Recruite/>
                    <button className="btn btn-outline-secondary" onClick={
                        ()=>{
                            setCreateView(false)
                        }
                    }>
                        Back
                    </button>
                </>
                :
                <>
                    <button className="btn btn-outline-success mb-3"
                        onClick={()=>{
                            setCreateView(true)
                        }}>
                        Recruite New Employee
                    </button>
                    <div className="row justify-content-center">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Employee Place</th>
                                        <th>Employee Commercials</th>
                                        <th>Employee Skills</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tmpArray.map((ele)=>(
                                        <tr>
                                            <td>{ele.resName}</td>
                                            <td>{ele.resArea}</td>
                                            <td>{ele.resPay}</td>
                                            <td>{ele.resSkills}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
                }
            </div>
        </>
    )
}