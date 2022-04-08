import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              pariatur rerum consectetur architecto ad tempora blanditiis quo
              aliquid inventore a.
            </p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="/">home</a>
            <a href="/">features</a>
            <a href="/">about</a>
            <a href="/">review</a>
            <a href="/">pricing</a>
            <a href="/">contact</a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="/">facebook</a>
            <a href="/">instagram</a>
            <a href="/">pinterest</a>
            <a href="/">twitter</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <div className="info">
              <i className="fas fa-phone"></i>
              <p>
                {" "}
                +8801601593466
                <br /> +8801530130043
              </p>
            </div>
            <div className="info">
              <i className="fas fa-envelope"></i>
              <p>
                {" "}
                admin@mhshanto.com <br /> shanto.360@yahoo.com{" "}
              </p>
            </div>
            <div className="info">
              <i className="fas fa-map-marker-alt"></i>
              <p> Dhaka, Bangladesh </p>
            </div>
          </div>
        </div>

        <h1 className="credit">
          {" "}
          &copy; copyright 2022 by Mehedi Hasan Shanto{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
