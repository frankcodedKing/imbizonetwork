import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const{userid} = useParams();
    const [usersdata, setUsersdata] = useState({});


    useEffect(() => {
        fetch('http://localhost:8000/user/'+userid).then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsersdata(data);
        
        })
        .catch((err)=>{
            console.log(err);
        });

    }, []);

    return (
        <div>
            
            <Header />
            
            {   usersdata &&
                    <>
        
                <h3>Name: {usersdata.firstname} {usersdata.lastname}</h3> 
                <h5>Email: {usersdata.email} </h5>
                <h5>Phone: {usersdata.phone} </h5>
                <h5>Gender: {usersdata.gender} </h5>

                <Link to="/admin/users">
                                        <a href="" className="btn btn-sm btn-success">Back </a> 
                                        </Link>
                </>

                    
            }

            <Footer />
        </div>
      );

}

export default Viewuser