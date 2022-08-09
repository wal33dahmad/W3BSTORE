import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header trans_300">
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                free shipping on all u.s orders over $50
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="account">
                    <div className="alink">
                      My Account <i className="fa fa-angle-down"></i>
                    </div>
                    <ul className="account_selection">
                      <li>
                        <Link to={"/login"}>
                          <i className="fa fa-sign-in"></i>
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to={"/register"}>
                          <i className="fa fa-user-plus"></i>
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <Link to={"/"}>
                  W3B<span>STORE</span>
                </Link>
              </div>
              <div className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <NavLink
                      to={"/"}
                      style={({ isActive }) =>
                        isActive ? { color: "#fe4c50" } : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/shop"}
                      style={({ isActive }) =>
                        isActive ? { color: "#fe4c50" } : undefined
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      style={({ isActive }) =>
                        isActive ? { color: "#fe4c50" } : undefined
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li>
                    <a href="search">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="user">
                      <i className="fa fa-user"></i>
                    </a>
                  </li>
                  <li className="checkout">
                    <a href="cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span className="checkout_items">2</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
