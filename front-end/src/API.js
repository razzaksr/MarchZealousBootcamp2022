let myemployees=[
    {
        "resName":"Razak Mohamed S",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["Java","JavaScript","Python"]
    },
    {
        "resName":"Rasheedha R",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["JavaScript","Python"]
    },
    {
        "resName":"Titus C",
        "resPay":10000,
        "resArea":"Chennai",
        "resSkills":["Java"]
    },
    {
        "resName":"Murali S",
        "resPay":50000,
        "resArea":"Banglore",
        "resSkills":["Java","Python"]
    }
]

export const create=(obj)=>{
    myemployees.push(obj)
}

export const list=()=>{
    return myemployees
}