import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center">
                <div className="text w-100">
                  <h2>Welcome</h2>
                  <p>Already have an account?</p>
                  <Link
                    to={"/login"}
                    className="red_button message_submit_btn trans_300"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="signin_wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign Up</h3>
                  </div>
                </div>
                <form method="post" className="signin_form">
                  <div>
                    <input
                      className="form_input input_name input_ph"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="form_input input_email input_ph"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="form_input input_email input_ph"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="red_button message_submit_btn trans_300"
                      value="Submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
