import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const { default: Layout } = require("../components/layout")

const About = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "profile-pic.jpg" }) {
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
    <div>
      <Img fixed={data.file.childImageSharp.fixed} alt="Test image" />
    </div>
  )
}

export default About
