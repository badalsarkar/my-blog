//import "../pages/mystyles.scss"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const MainHeader = ({ title }) => {
  return (
    <React.Fragment>
      <div className="big-image">
        <div></div>
        <div className="overlay">
          <Link to="/about" id="about-button">
            About
          </Link>
          <h1 className="main-heading" style={{ color: "white" }}>
            {title}
          </h1>
          <p> Software Developer </p>
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "16px",
              fontSize: "50%",
            }}
          >
            <Link
              style={{ color: "#8c8c8c", textDecoration: "none" }}
              to="https://www.linkedin.com/in/md-saimum-khaled-a9911342/?originalSubdomain=bd"
              target="_blank"
            >
              Photo credit: Saimum Khaled
            </Link>{" "}
            &nbsp; &nbsp; |&nbsp; &nbsp;
            <Link
              style={{ color: "#8c8c8c", textDecoration: "none" }}
              to="https://en.wikipedia.org/wiki/Nafa-khum"
              target="_blank"
            >
              Location: Nafa-khum, Bandarban, Bangladesh
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainHeader
