import { useEffect, useState } from "react";  
  

//Users page can be accessed via http://localhost:5173/users
function Users(){
    const [data, setData] = useState([])
    useEffect(()=>  {
        fetch('http://localhost:3000/users')
        .then(res=>res.json())
        .then(data=>setData(data))
        .then(console.log(data))
        .catch(err => console.log(err))
    }, [])
    

    return (
       <div>
        <table>
            <thead>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.UserName}</td>
                        <td>{d.Email}</td>
                        <td>{d.Hash}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
    )}
export default Users;