import React, { useEffect, useState } from "react";

function LocalStorage() {
  useEffect(() => {}, []);

  const [state, setState] = useState({
    email: "",
    password: "",
    newdata : ""
  });

//   function check(e) {
//     e.preventDefault();
//     var loginemail = state.email;
//     var loginpass = state.email;
//     const storeuser = JSON.parse(localStorage.getItem("Users"));
//     console.log(storeuser);

//     if (storeuser) {
//       for (let u = 0; u < storeuser.length; u++) {
//         const em = storeuser[u].email;
//         console.log(em);
//         const p = storeuser[u].password;
//         console.log(p);
//         if (loginemail === em && loginpass === p) {
//           alert("Success" + loginemail);
//           return;
//         }
//       }
//       return alert("error");
//     }
//   }

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const cartObj = {
    item1: {
      id : 1,
      name : "one"
    },
    item2: {
      id : 2,
      name : "two"
    },
  }

  
  // localStorage.setItem("cart", JSON.stringify(cartObj));
  
  // getting back the object
  // const copyCartObj = JSON.parse(localStorage.getItem("cart"));

  
  // const newarr = []
  // newarr.push({ id : 1, name : "Shubham" }, copyCartObj)
  // newarr.push({ id : 2, name : "Shubham" }, copyCartObj)
  // const newpushitem = newarr.push({ id : 5 })
  // localStorage.setItem("arr",[])
  // localStorage.setItem("arr",JSON.stringify(newarr))

  function loginUser(e) {
    e.preventDefault();
    const loginEmail = state.email;
    const loginPass = state.password;
    if (localStorage.getItem("UsersLogin")) {
      const allStoredUsers = JSON.parse(localStorage.getItem("UsersLogin"));
      const matchedUser = allStoredUsers.filter((user) => {
        return loginEmail === user.email && loginPass === user.password;
      });
      if (matchedUser.length) {
        console.log("Login successful");
        alert("Login Successfull");
      } else {
        console.log("Wrong credentials");
        alert("Wrong Credintials");
      }
    } else {
      console.log("Wrong credentials"); // Don't say "Not a registered user"
    }
  }


  const multipledata = () =>{
    var new_data = state.newdata;
    if(localStorage.getItem("data") == null){
      localStorage.setItem("data",[{}])
    }
    var old_data = JSON.parse(localStorage.getItem("data"))
    old_data.push(new_data)
    localStorage.setItem("data", JSON.stringify(old_data))
  }

  return (
    <div>
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="card w-25 my-auto shadow">
            <div className="card-header text-center ">
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    id="login-email"
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    id="login-pass"
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <button onClick={loginUser}>Login</button>
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

export default LocalStorage;
