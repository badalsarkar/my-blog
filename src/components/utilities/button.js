import React from "react"
import { Link } from "gatsby"

const Button = ({ text, style, to }) => {
  let linkStyle = {
    border: "1px solid black",
    borderRadius: "50px",
    padding: "5px",
    textDecoration: "none",
    fontSize: "12px",
  }

  linkStyle = { ...linkStyle, ...style }

  const mouseOver = e => {
    e.target.style.background = "rgb(130, 138, 99)"
    e.target.style.border = "1px solid rgb(130, 138, 99)"
    e.target.style.color = "white"
  }

  const mouseOut = e => {
    e.target.style.background = "none"
    e.target.style.border = "1px solid black"
    e.target.style.color = "black"
  }

  return (
    <Link
      to={to}
      style={linkStyle}
      onMouseOver={mouseOver}
      onMouseLeave={mouseOut}
    >
      {text}
    </Link>
  )
}

export default Button
