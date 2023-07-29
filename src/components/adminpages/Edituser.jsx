import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edituser = () => {
    const{userid} = useParams();
    // const [usersdata, setUsersdata] = useState({});


    useEffect(() => {
        fetch('http://localhost:8000/user/'+userid).then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
            setPhone(data.phone);
            setGender(data.gender);
        
        })
        .catch((err)=>{
            console.log(err);
        });

    }, []);

            
                                
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState("");
        const [gender, setGender] = useState("");

        const navigate = useNavigate();

            
        const handleFirstnameChange = (event) => {
            setFirstname(event.target.value);
        };

        const handleLastnameChange = (event) => {
            setLastname(event.target.value);
        };

        const handleEmailChange = (event) => {
            setEmail(event.target.value);
        };


        const handlePhoneChange = (event) => {
            setPhone(event.target.value);
        };

        const handleGenderChange = (event) => {
            setGender(event.target.value);
        };


    
    

    const handleSubmit = (e) => {
        e.preventDefault();

        
        let regobj = {
            firstname,
            lastname,
            email,
            phone,
            gender
            }
            // Perform registration logic here
            console.log('Registration Submitted:', regobj);

            // SUBMIT TO API URL
            let result = fetch('http://localhost:8000/user/'+userid, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(regobj),
            }).then((res)=>{
            toast.success('Successfull')
            navigate("/admin/users");
            }).catch((err)=>{toast.error('Failed')});
                console.log(err);
            };

    return (
        
        <div>
                            
                    <Header />


                <div className="col-md-6 offset-md-3">

                <h2>Edit User</h2>

                <form class="bg-white p-4" onSubmit={handleSubmit}>
                    <div class="mb-3">
                    <label for="firstNameInput" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstNameInput" placeholder="Enter your first name" value={firstname} onChange={handleFirstnameChange} required />
                    </div>
                    <div class="mb-3">
                    <label for="lastNameInput" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastNameInput" placeholder="Enter your last name" value={lastname} onChange={handleLastnameChange} required />
                    </div>
                    <div class="mb-3">
                    <label for="emailInput" class="form-label">Email</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
                    </div>
                    {/* PHONE */}
                    <div class="mb-3">
                    <label for="phoneInput" class="form-label">Phone</label>
                    <input type="phone" class="form-control" id="phoneInput" placeholder="Enter your phone" value={phone} onChange={handlePhoneChange} required />
                    </div>

                    <div class="mb-3">
                        <div class="mb-3">
                        <label for="passwordInput" class="form-label">Gender :{gender}</label>
                        <br />
                                    <label>
                                <input
                                    type="radio"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={handleGenderChange}
                                /> 
                                Male
                                </label>
                                <br />
                                <label>
                                <input
                                    type="radio"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={handleGenderChange}
                                />
                                Female
                                </label>
                                


                        </div>
                    </div>

                    
                    <br />

                    <button type="submit" class="btn btn-dark">Submit</button>

                    <Link to="/admin/users">
                                        <a href="" className="btn btn-sm btn-success">Back </a> 
                                        </Link>
                </form>

                </div>

                <Footer />
        </div>
      );

}

export default Edituser