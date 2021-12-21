import React, { useEffect, useState } from "react";
import UserRecords from './UserRecords'

export const Api = () =>{
    const[data, setData] = useState([]);
    const fetchUrl = "https://jsonplaceholder.typicode.com";

    const getData = () =>{
        fetch(`${fetchUrl}/users`)
        .then((res)=> res.json()).then(res => setData(res))
        
    }

    useEffect(()=>{
        getData()
        // console.log(data);
    }, [])

    return(
        <div>
            <UserRecords rows={data}/>
            {data.length > 0 && data.map((item) => 
            <ul>
            <li>{item.name}</li>
            </ul>
      )}
        </div>
    );

}