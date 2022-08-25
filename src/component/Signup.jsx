import React from "react";

const Signup = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark "
        data-toggle="modal"
        data-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span>
        Register
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-3">
                <span className="fa fa-google me-2"></span> SignUp With Google
              </button>
              <button className="btn btn-primary w-100 mb-3">
                <span className="fa fa-facebook me-2"></span> SignUp With
                Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-dark w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
