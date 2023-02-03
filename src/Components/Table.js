import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Table = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [userPerPage, setUserPerPage] = useState(4)
    // console.log(users)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex)
    return (
        <div className="overflow-x-auto">
            <table className="table w-full max-w-[1000px] mx-auto">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email </th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map((user, i) => <tr
                            key={i}
                            className="hover"
                        >
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/details/${user.id}`}><button className='btn btn-sm btn-primary'>Details </button></Link></td>
                        </tr>)
                    }


                </tbody>
            </table>

            <div className='my-2 mx-auto'>
                <Pagination
                    totalUsers={users.length}
                    usersPerPage={userPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Pagination>
            </div>
        </div>
    );
};



export default Table;