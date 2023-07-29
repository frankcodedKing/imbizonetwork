import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here with username and password
    console.log("Email:", email);
    console.log("Password:", password);

    // Fetch request Post to api url
    
    fetch('http://localhost:8000/user'+email).then((res)=>{
        return res.json();
    }).then((data)=>{
      console.log(data);
      toast.success('Login Successfull')
      navigate("/dashboard");
    }).catch((err)=>{
      toast.error('Login Failed '+err.message);
    });

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
<>

    <Header />



    
    <div className="row">

    <div className="col-md-6 offset-md-3">
      
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>

      {/* EMAIL */}
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Email" value={email}
            onChange={handleEmailChange} required />
          </div>
        </div>

    
        {/* PASSWORD */}
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" value={password}
            onChange={handlePasswordChange} required />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
          <button type="submit" className="btn" style={{ backgroundColor: '#E56A54'}}>Sign in</button>
          </div>
        </div>
      </form>
    </div>
 
    
    </div>


    <Footer />

    </>

  );
};

export default Login;
