import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        public_repos: "Dummmy",
        login: "Default",
        avatar_url: "https://dummyimage.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/chinmaypareek");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { public_repos, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Public Repos: {public_repos}</h2>
        <h3>Login: {login}</h3>
        <h4>Contact: @chinnmay._</h4>
      </div>
    );
  }
}

export default UserClass;
