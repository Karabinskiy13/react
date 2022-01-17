import React, {useEffect,useState} from "react";
import {User} from "./User";


export  function Users() {
    let [UserList, setUserList]=useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => user.filter((item, i)=>i<10))
            .then(users => {
                setUserList(users)
            })
    },[])
    return(
        <div>
            {UserList.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email}/>)}
        </div>
    )
}
