const Benefit = () => {
  return (
    <div className="benefit">
      <div className="container">
        <div className="row benefit_row">
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-truck fa-flip-horizontal"></i>
              </div>
              <div className="benefit_content">
                <h6>Free Shipping</h6>
                <p>Free shipping worldwide</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-money-bill-1" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Cash on delivery</h6>
                <p>Pay upon delivery</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-arrow-rotate-left"></i>
              </div>
              <div className="benefit_content">
                <h6>45 days return</h6>
                <p>Hassle free returns</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="benefit_content">
                <h6>opening all week</h6>
                <p>8AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
