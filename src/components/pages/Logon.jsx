



// CUT HERE 


import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

// USE FOR REG FORM
// "firstname": "chinonso",
// "lastname": "okike",
// "email": "example1@gmail.com",
// "phone": "+234123456787",
// "password": "123456",
// "confirm_password": "1234565",
// "gender": "male"

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmpassword] = useState("")
  // const [gender, setGender] = useState("");

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmpasswordChange = (event) => {
  //   setConfirmpassword(event.target.value);
  // };

  // const handleGenderChange = (event) => {
  //   setGender(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here with names, email, and password
    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("Email:", email);
    // console.log("Phone:", phone);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmpassword);
    // console.log("Gender:", gender);
   
    // Reset form fields
    setFirstname("");
    setLastname("");
    setEmail("");
    // setPhone("");
    // setPassword("");
    // setConfirmpassword("");
    // setGender("")
    
  };

  return (

    <>

    <Header />

    
    <div className="row">

    <div className="col-md-6 offset-md-3">

    <h2>Register</h2>

      <form>
        {/* FIRSTNAME */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Firstname</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="firstname" placeholder="Firstname" value={firstname}
            onChange={handleFirstnameChange} />
          </div>
        </div>

        {/* LASTNAME */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Lastname</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="lastname" placeholder="Lastname" value={lastname}
            onChange={handleLastnameChange}/>
          </div>
        </div>

      {/* EMAIL */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
          </div>
        </div>

        {/* PHONE */}
        {/* <div className="form-group row">
          <label className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="phone" className="form-control" id="phone" placeholder="phone" value={phone} onChange={handlePhoneChange}/>
          </div>
        </div> */}

        {/* PASSWORD */}
        {/* <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" placeholder="Password" value={password}
            onChange={handlePasswordChange}/>
          </div>
        </div> */}

        {/* <div className="form-group row">
          <label className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" value={confirmpassword}
            onChange={handleConfirmpasswordChange} />
          </div>
        </div> */}
 
       
       {/* GENDER */}
       {/* <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="male" id="gridRadios1" value={gender}
            onChange={handleGenderChange} />
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="female" id="gridRadios2" value={gender}
            onChange={handleGenderChange}/>
                <label className="form-check-label">
                  Female
                </label>
              </div>
              
            </div>
          </div>
        </fieldset> */}

        <div className="form-group row">
          <div className="col-sm-10">
          <button type="submit" className="btn" style={{ backgroundColor: '#E56A54'}}>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
 



    
    </div>

    <Footer />

    </>
  );
};

export default Register;
