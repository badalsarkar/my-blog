import { Link } from "gatsby"
import React from "react"
import Button from "./utilities/button"

const SubHeader = () => {
  const style = {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  }

  return (
    <div style={style}>
      <Button
        text="Home"
        style={{ position: "relative", right: "100px", top: "20px" }}
        to="/"
      />
    </div>
  )
}

export default SubHeader
