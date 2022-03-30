import React, { useEffect, useState } from "react"
const Ternary=()=>{
    const[season,setSeason]=useState("");

    useEffect(()=>{
        setSeason(prompt("Tell us season morning/noon/evening/something",""));
//        alert(season);
    },[])

    return(
        <>
            {
                (season==="morning")?
                    <button className="btn btn-outline-warning">
                        Happy Morning
                    </button>
                :
                (season==="noon")?
                    <button className="btn btn-outline-danger">
                        Happy Noon
                    </button>
                :
                (season==="evening")?
                <button className="btn btn-outline-success">
                    Happy Evening
                </button>
                :
                <button className="btn btn-outline-dark">
                    Happy Night
                </button>
            }
            
            {/* 
            
             */}
        </>
    );
}
export default Ternary;