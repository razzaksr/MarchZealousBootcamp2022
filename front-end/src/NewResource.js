import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Recruite=()=>{
    const gopi=()=>{
        alert("Hired")
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
                                placeholder="Name of the resource person"
                                className="form-control"
                            />
                        </div>
                        
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Resource Commercial</label>
                                <input
                                    type="number"
                                    name="resPay"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label>Resource Location</label>
                                <select name="resArea" className="form-select">
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
                                value="Java" 
                                className="form-check-input"/>Java
                            <input 
                                type="checkbox" 
                                name="python" 
                                value="Python"
                                className="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>Python
                            <input 
                                type="checkbox" 
                                name="javascript" 
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