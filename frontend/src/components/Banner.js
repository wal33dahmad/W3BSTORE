const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: `url("/images/xbanner_1.webp")` }}
            >
              <div className="banner_category">
                <a href="/">women's</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: `url("/images/xbanner_2.webp")` }}
            >
              <div className="banner_category">
                <a href="/">accessories</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: `url("/images/xbanner_3.webp")` }}
            >
              <div className="banner_category">
                <a href="/">men's</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
