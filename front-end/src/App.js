import React from "react";
import { Recruite } from "./NewResource";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Home } from "./Home";
import { Simple } from "./HookUseState";
import Ternary from "./Ternary";

const App=()=>
{
    return(
        <>
            {/* <Ternary/> */}
            <Home/>
            {/* <Simple/> */}
        </>
    )
    // // internal styles 
    // const yet={
    //     border: '4px',
    //     borderColor: 'red',
    //     borderStyle: 'dashed'
    // }

    // const imgsty={
    //     width:'600px',
    //     height:'300px',
    //     borderRadius:'55px',
    //     boxShadow:'10px 10px 10px maroon'
    // }

    // const own={
    //     fontSize:'60px',
    //     fontFamily:'Monotype Corsiva'
    // }

    // return(
    // <>
    //     <Strap1/>
    //     <p style={{color:'blue',backgroundColor:'green',
    //     textTransform:'uppercase'}}> 
    //     Hello there! 
    //     </p>
    //     <hr color="blue"/>
    //     <p style={own}>Annamalai</p>
    //     <h1>Bootcamp frameworks</h1>
    //     <ol style={yet}>
    //         <li>React</li><li>Spring boot</li><li>Hibernate</li>
    //         <li>JUnit</li><li>Mockito</li>
    //         <li>Jenkins</li>
    //     </ol>
    //     <img width="500px" height="500px" src="pictures/compoents of react.png"/>
    //     <img style={imgsty} src="pictures/night.jpg"/>
    // </>
    // )
}

function Hey()
{
    return(<p>Hooks</p>)
}

export {Hey}
export default App;