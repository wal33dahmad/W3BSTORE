import React from "react";
import Footer from "./partials/Footer";
import NewsLetter from "./NewsLetter";
import Navbar from "./partials/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container contact_container">
        <div className="row">
          <div className="col-lg-6 contact_col">
            <div className="contact_contents">
              <h1>Contact Us</h1>
              <p>
                There are many ways to contact us. You may drop us a line, give
                us a call or send an email, choose what suits you the most.
              </p>
              <div>
                <p>(800) 123-456</p>
                <p>infor.w3bstore@mail.com</p>
              </div>
              <div>
                <p>Open hours: 8.00-18.00 Mon-Fri</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="follow_us_contents">
              <h1>Follow Us</h1>
              <div className="social d-flex flex-row">
                <li>
                  <a href="/" style={{ background: "#3a61c9" }}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/" style={{ background: "#41a1f6" }}>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" style={{ background: "#8f6247" }}>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="col-lg-6 get_in_touch_col">
            <div className="get_in_touch_contents">
              <h1>Get In Touch With Us!</h1>
              <p>Fill out the form below to recieve a free and confidential.</p>
              <form method="post">
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
                    className="form_input input_website input_ph"
                    type="url"
                    name="name"
                    placeholder="Website"
                    required
                  />
                  <textarea
                    className="input_ph input_message"
                    name="message"
                    placeholder="Message"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="red_button message_submit_btn trans_300"
                    value="Submit"
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Contact;
