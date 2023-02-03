import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user = useLoaderData()
    console.log(user)
    // const [user, setUser] = useState('');

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users/1')
    // },[])
    return (
        <div>
            <h1>This is details for : <span className='text-red-300'>{user.name}</span> </h1>


            {/* <tr
                key={i}
                className="hover"
            >
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td><Link to={`/details/${user.id}`}><button className='btn btn-sm'>Details </button></Link></td>
            </tr> */}
        </div>
    );
};

export default Details;