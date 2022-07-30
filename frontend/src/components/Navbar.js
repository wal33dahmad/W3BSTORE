const Navbar = () => {
  return (
    <div className="main_nav_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-right">
            <div className="logo_container">
              <a href="/">
                W3B<span>STORE</span>
              </a>
            </div>
            <div className="navbar">
              <ul className="navbar_menu">
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="shop">Shop</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
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
                    <span class="checkout_items">2</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
