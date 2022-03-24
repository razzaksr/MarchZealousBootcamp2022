import React, { useEffect, useState } from "react";


export const Simple=()=>{

    const [hai,setHai]=useState(1);

    useEffect(()=>{
        setHai(100)
    },[])

    return(
        <>
            <button className="btn btn-outline-danger" onClick={()=>{
                setHai(hai+1)
            }}>
                Dont you dare
                <span>{hai}</span>
            </button>
        </>
    )
}