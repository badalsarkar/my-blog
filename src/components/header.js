//import "../pages/mystyles.scss"
import { Link } from "gatsby"
import React from "react"

const Header = ({ title }) => {
  return (
    <div className="big-image">
      <div className="overlay">
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
  )
}

export default Header
