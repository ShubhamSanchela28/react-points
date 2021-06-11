import React, { Component } from "react";

const ProfileContext = React.createContext();

class ProfileProvider extends Component {
  state = {
    company: "Artoon",
    companyImage: "https://svgshare.com/i/9ir.svg",
    url: "https://www.telerik.com/kendo-react-ui/",
    userImage: "https://i.imgur.com/Y1XRKLf.png",
    userName: "SRS",
    fullName: "Shubham Sanchela",
    team: "Artoon-Team",
  };
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
}

const ProfileApp = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
);

const Profile = () => (
  <div className="profile">
    <ProfileContext.Consumer>
      {(context) => <img src={context.companyImage} />}
    </ProfileContext.Consumer>
    <User />
  </div>
);

const User = () => (
  <div className="user">
    <ProfileContext.Consumer>
      {(context) => (
        <React.Fragment>
          <a href={context.url}>
            <img src={context.userImage} width="138px" />
          </a>
          <h1 className="profile-userName">{context.userName}</h1>
          <p className="profile-fullName">({context.fullName})</p>
        </React.Fragment>
      )}
    </ProfileContext.Consumer>
    <Team />
  </div>
);

const Team = () => (
  <ProfileContext.Consumer>
    {(context) => (
      <div className="team">
        <p className="profile-team">{context.team}</p>
      </div>
    )}
  </ProfileContext.Consumer>
);
export default ProfileApp;
