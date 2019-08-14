import React from "react";

function LoginForm(props) {
  return (
    <div>
      <nav className="navbar navbar-light">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              onChange={props.onUsernameChange}
              value={props.username}
            />
            <small id="emailHelp" className="form-text text-muted">
              Your username
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              onChange={props.onPasswordChange}
              value={props.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </nav>
    </div>
  );
}

export default LoginForm;
