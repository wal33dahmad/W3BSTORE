import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      await axios.post("http://localhost:8080/login", user).then((res) => {
        console.log(res.data.message);
        navigate("/");
      });
    } else {
      alert("Please enter all details");
    }
  };

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
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="form_input input_name input_ph"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="red_button message_submit_btn trans_300"
                      value="Submit"
                      onClick={login}
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
