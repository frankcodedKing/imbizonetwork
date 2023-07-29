import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [usersdata, setUsersdata] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/admin/updateuser/"+id);
    }
    const LoadRemove = (id) => {
        if (window.confirm('Delete User?')) {
        fetch('http://localhost:8000/user/'+id, {
            method: 'DELETE'
            }).then((res)=>{
            toast.success('Successfull')
            window.location.reload();
            }).catch((err)=>{toast.error('Failed')});
                console.log(err);
            };
        }

    const LoadDetail = (id) => {
        navigate("/admin/detailuser/"+id)
    }
    
    useEffect(() => {
        
        fetch('http://localhost:8000/user').then((res)=>{
            return res.json();
            }).then((data)=>{
        setUsersdata(data);
        }).catch((err)=>{
        console.log(err);
        });

    },
     []);
 
     return (
        <div>
            
            <Header />

            <h2> ALL USERS </h2>
            <div className="container">
                    <h2>Users Table</h2>
                    <div className="table-responsive">

                    <Link to="/admin/createuser"><a href="" className="btn btn-success">Add user (+) </a> </Link>
                    <br /><br />
                        
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <!-- Replace this with actual data from your backend or source --> */}
                        { usersdata &&
                                usersdata.map((user) => (
                                    <tr key={user.id}>
                                    {/* Render individual user data as table cells */}
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                    

                                    <a href="" onClick={()=> {LoadEdit(user.id)}} className="btn btn-sm btn-success">Edit </a> 
                                    <a href="" onClick={()=> {LoadRemove(user.id)}}  className="btn btn-sm btn-danger"> Remove</a>
                                    <a href="" onClick={()=> {LoadDetail(user.id)}}  className="btn btn-sm btn-primary"> Details</a>

                                    
                                        </td>
                                    </tr>
                            ))}


                       
                        {/* <!-- Add more rows as needed --> */}
                        </tbody>
                    </table>
                    </div>
                    </div>

            <Footer />
        </div>
      )
}

export default Users