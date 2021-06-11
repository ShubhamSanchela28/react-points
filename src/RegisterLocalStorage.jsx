import React, { useState } from "react";

function RegisterLocalStorage() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  //   const store = (e) => {
  //     e.preventDefault();
  //     const registeremail = state.email;
  //     const registerpass = state.password;

  //     const storeuser = JSON.parse(localStorage.getItem("Users"));
  //     if (storeuser) {
  //       storeuser.push({ email: registeremail, password: registerpass });
  //       localStorage.setItem("Users", JSON.stringify(storeuser));
  //     } else {
  //       localStorage.setItem(
  //         "Users",
  //         JSON.stringify([{ email: registeremail, password: registerpass }])
  //       );
  //     }
  //   };

  const UserRegistration = (e) => {
    e.preventDefault();
    let storedUsers = localStorage.UsersLogin
      ? JSON.parse(localStorage.UsersLogin)
      : [];
    const userData = {
      email: state.email,
      password: state.password,
    };
    storedUsers.push(userData);
    localStorage.setItem("UsersLogin", JSON.stringify(storedUsers));
    window.location.reload();
    console.log("Registration Successfull");
  };

  return (
    <div>
      <h1>RegisterForm</h1>
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="card w-25 my-auto shadow">
            <div className="card-header text-center ">
              <h3>Registration Form</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    id="register-email"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    id="register-pass"
                    name="password"
                    value={state.password}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <button onClick={UserRegistration}>Register</button>
              </form>
            </div>
            <div className="card-footer">
              <small>&copy; E-Commerce</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLocalStorage;
