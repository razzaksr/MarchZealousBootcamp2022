import axios from 'axios'

const link="http://localhost:8082/POC1BackEnd";

export const join=async(obj)=>{
    const hai=await axios.post(`${link}/new`,obj)
    return hai;
}

export const gather=async()=>{
    const yet = await axios.get(`${link}/home`)
    return yet;
}

export const reachOne=async(position)=>{
    const t = await axios.get(`${link}/getting/${position}`)
    return t;
}