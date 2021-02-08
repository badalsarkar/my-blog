import { Link } from "gatsby"
import React from "react"
import WorkCardModule from "./workCard.module.css"
import { FaLink } from "react-icons/fa"

const WorkCard = ({ name, description, tools, contribution, detailsLink }) => {
  return (
    <div className={WorkCardModule.card}>
      <Link
        to={detailsLink}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
        }}
      ></Link>
      <h5>{name}</h5>
      <p style={{ fontSize: ".80rem" }}>{description}</p>
      <div>
        {tools.map(element => {
          return <span className={WorkCardModule.tag}>{element}</span>
        })}
      </div>

      <div>
        <span style={{ fontSize: ".76rem" }}>
          Contributions: {contribution}
        </span>
      </div>
    </div>
  )
}

export default WorkCard
