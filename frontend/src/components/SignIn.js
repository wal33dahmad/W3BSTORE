import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome</h2>
                  <p>Don't have an account?</p>
                  <Link
                    to={"/register"}
                    className="red_button message_submit_btn trans_300"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="signin_wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                </div>
                <form method="post" className="signin_form">
                  <div>
                    <input
                      className="form_input input_email input_ph"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="form_input input_name input_ph"
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
                      Sign In
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

export default SignIn;
