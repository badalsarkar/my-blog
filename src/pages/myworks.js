import SubHeader from "../components/sub-header"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import worksStyle from "../css/myworks.module.css"
import OpenSourceContribution from "../components/opensource"
import ProjectWork from "../components/projects"

const MyWorks = ({ location }) => {
  const workData = useStaticQuery(graphql`
    query nasaImage {
      file(relativePath: { eq: "nasa.jpg" }) {
        id
        childImageSharp {
          fixed {
            base64
            height
            src
            srcSet
            aspectRatio
            width
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <SubHeader />
      <div className={worksStyle.container}>
        <div>
          <h3 style={{ display: "block", textAlign: "center" }}>
            Open Source Contribution
          </h3>
          <hr />
          <OpenSourceContribution />
        </div>
        <br />
        <div>
          <h3 style={{ display: "block", textAlign: "center" }}>Projects</h3>
          <hr />
          <ProjectWork />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyWorks
