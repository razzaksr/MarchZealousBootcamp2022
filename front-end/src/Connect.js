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

export const erase=async(pk)=>{
    const t = await axios.delete(`${link}/del/${pk}`)
    return t;
}

export const reachOne=async(position)=>{
    const t = await axios.get(`${link}/getting/${position}`)
    return t;
}

export const updateOne=async(obj)=>{
    const hai=await axios.put(`${link}/update`,obj)
    return hai;
}