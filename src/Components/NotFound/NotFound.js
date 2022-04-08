import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
      <div className="NotFound">
        <div>
          <p className="">
            Error 404
          </p>
          <h1 className="">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to="/"
            className=" not btn"
          >
            Back to homepage
          </Link>
        </div>
      </div>
  );
};

export default NotFound;
