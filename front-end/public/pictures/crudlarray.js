let arr=new Array('Evans','Helmsworth','Pratt');

const del=()=>{
    const hai=document.getElementById("content").value;
    arr=arr.filter((ele)=>{
        return ele!==hai
    })
    list();
}

const update=()=>{
    const hai=document.getElementById("content").value;
    const newone=prompt("Tell us new cast instead of "+arr[hai],"")
    arr[hai]=newone
    list();
}

const read=()=>{
    const hai=document.getElementById("content").value;
    document.getElementById("display").innerHTML=arr[hai];
}

const create=()=>{
    const hai=document.getElementById("content").value;
    arr.push(hai);
    list();
}

const list=()=>{
    let gather="";
    gather+="<table class='table text-center text-light'><thead><tr><th>Crew&Cast</th></tr></thead><tbody>";

    arr.map((elem)=>{
        gather+="<tr><td>"+elem+"</td></tr>";
    })

    gather+="</tbody></table>";

    document.getElementById("display").innerHTML=gather;
}