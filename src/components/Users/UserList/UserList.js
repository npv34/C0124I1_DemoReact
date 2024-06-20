import UserSearch from "../UserSearch/UserSearch";
import {useEffect, useState} from "react";
import Star from "./Star/Star";
import {Link} from "react-router-dom";

function UserList() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Luan",
            email: "luan.com",
            dob: "2000-01-01",
            rate: 4
        },
        {
            id: 2,
            name: "Quan",
            email: "quan.com",
            dob: "2000-01-01",
            rate: 3
        },
        {
            id: 3,
            name: "Teo",
            email: "teo.com",
            dob: "2000-01-01",
            rate: 2.5
        },
        {
            id: 4,
            name: "linh",
            email: "linh.com",
            dob: "2000-01-01",
            rate: 2.5
        }
    ]);

    const [listUsersFilter, setListUsersFilter] = useState(users);

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete")) {
            // tao new array with destructing
            const newUsers = [...users];
            //xoa 1 phan tu mang moi
            newUsers.splice(index, 1);
            //set lai gia tri state -> component re-render
            setUsers(newUsers);
        }
    }


    const changeStart = (indexUser, newStar) => {
        users[indexUser].rate = newStar + 1;
        setUsers([...users]);
    }

    const handleSearch = (keyword) => {
        //tim kiem user theo ten
        let usersF = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.toLowerCase().includes(keyword.toLowerCase())) {
                usersF.push(users[i]);
            }
        }

        // const userFilter = users.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
        setListUsersFilter(usersF);
    }

    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    <div className="row">
                        <div className="col"> User List
                            <Link to={`/users/create`}>
                                <button className="btn btn-primary">Add User</button>
                            </Link>
                        </div>
                        <div className="col">
                            <UserSearch search={handleSearch}/>
                        </div>
                    </div>


                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dob</th>
                            <th scope="col">Rate</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {listUsersFilter.map((user,index) => (
                            <tr key={"tr" + index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.dob}</td>
                                <td>
                                    <Star name="Luan" indexUser={index} totalStar={user.rate} ratingStar={changeStart}/>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                                    <Link to={`/users/${user.id}/edit`}>
                                        <button className={"btn btn-primary"}>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList;