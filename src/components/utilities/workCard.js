import { Link } from "gatsby"
import React from "react"
import WorkCardModule from "./workCard.module.css"
import { FaLink } from "react-icons/fa"

const WorkCard = ({
  name,
  description,
  tools,
  contribution,
  contributionLink,
}) => {
  return (
    <div className={WorkCardModule.card}>
      <h5>{name}</h5>
      <span style={{ fontSize: ".96rem" }}>{description}</span>
      <div>
        {tools.map(element => {
          return <span className={WorkCardModule.tag}>{element}</span>
        })}
      </div>

      <span style={{ fontSize: ".76rem" }}>
        <FaLink /> &nbsp;
        <Link to={contributionLink} target="_blank">
          Contribution: {contribution}
        </Link>
      </span>
    </div>
  )
}

export default WorkCard
