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
          <h3>Open Source Contribution</h3>
          <OpenSourceContribution />
        </div>
        <div>
          <h3>Projects</h3>
          <ProjectWork />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyWorks
