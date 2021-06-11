import "./App.css";
import ClassCmp from "./ClassCmp";
import Context from "./Context";
import Form from "./Form";
import Hooks from "./Hooks";
import LifeCycle from "./LifeCycle";
import Loading from "./Loading";
import Login from "./Login";
import LiftingStateUp from "./LiftingStateUp";
import BoilingWater from "./BoilingWater";
import LiftingTodo from "./LiftingTodo";
import RenderProps from "./RenderProps";
import RenderApp from "./RenderProps";
import RenderPropShopping from "./RenderPropShopping";
import UseEffectLocalStorege from "./UseEffectLocalStorege";
import ProfileApp from "./ProfileProvider";
import { Component, useContext, useEffect, useState } from "react";
import LocalStoreageDemo from "./LocalStoreageDemo";
import LocalStorage from "./LocalStorage";
import RegisterLocalStorage from "./RegisterLocalStorage";
import Token from "./Token";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie"
import AppToken from "./AppToken";
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import SignIn from './screens/SignIn';
import Panel from './screens/Panel';
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [auth, setAuth] = useState(false)

  const readCookie = () => {
    const user = Cookies.get("user")
    if (user) {
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookie()
  }, [])

  function userName(user) {
    return user.fname + " " + user.lname;
  }

  const user = {
    fname: "Shubham",
    lname: "Sanchela",
  };

  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  const carname = "Chevrolet Cruze";

  const [buttonText, setButtonText] = useState("Click Me Please");

  return (
    <div className="">
      {/* <h1>Hello, {userName(user)}!</h1>
      {element}
      <button onClick={() => setButtonText("Thanks for Clicking!!")}>
        {buttonText}
      </button> */}
      {/* <ClassCmp color="props" car={carname} /> */}
      {/* <LifeCycle /> */}
      {/* <Login /> */}
      {/* <Form /> */}
      {/* <Hooks /> */}
      {/* <Context /> */}
      {/* <CustomHooks /> */}
      {/* <Loading /> */}
      {/* <LiftingStateUp /> */}
      {/* <BoilingWater /> */}
      {/* <LiftingTodo /> */}
      {/* <RenderApp /> */}
      {/* <RenderPropShopping /> */}
      {/* <UseEffectLocalStorege /> */}
      {/* <ProfileApp /> */}
      {/* <LocalStoreageDemo /> */}
      {/* <RegisterLocalStorage />
      <LocalStorage /> */}
      {/* <Token /> */}
      {/* <AppToken /> */}

      {/* <AuthApi.Provider value={{ auth, setAuth }} >
        <Router >
          <Routes />
        </Router>
      </AuthApi.Provider> */}
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute path="/" component={Panel} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

const LoginOne = () => {

  const Auth = useContext(AuthApi)
  const handleClick = () => {
    Auth.setAuth(true)
    Cookies.set("user", "True")
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick} >Login</button>
    </div>
  )
}


const Dashboard = () => {

  const Auth = useContext(AuthApi)

  const handleLogout = () => {
    Auth.setAuth(false)
    Cookies.remove("user")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

const Routes = () => {

  const Auth = useContext(AuthApi)

  return (
    <Switch>
      <ProctedLogin path="/loginone" auth={Auth.auth} component={LoginOne} />
      <ProctedRoute path="/dashboard" auth={Auth.auth} component={Dashboard} />
    </Switch>
  )
}

const ProctedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => auth ? (
        <Component />
      ) :
        <Redirect to="/login" />
      }
    />
  )
}

const ProctedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => !auth ? (
        <Component />
      ) :
        <Redirect to="/dashboard" />
      }
    />
  )
}

export default App;
