import { Link } from "gatsby"
import React from "react"
import { Fragment } from "react"
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
    <Fragment>
      <div
        style={{
          fontSize: ".8rem",
          textAlign: "center",
          backgroundColor: "yellow",
        }}
      >
        The design of this project is still under development
      </div>
      <div style={style}>
        <Button
          text="Home"
          style={{ position: "relative", right: "115px", top: "20px" }}
          to="/"
        />

        <Button
          text="My Works"
          style={{ position: "relative", right: "100px", top: "20px" }}
          to="/myworks"
        />
      </div>
    </Fragment>
  )
}

export default SubHeader
