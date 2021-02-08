import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SubHeader from "../components/sub-header"

const About = ({ location }) => {
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
  const siteTitle = `Title`
  return (
    <React.Fragment>
      <SubHeader />
      <div className="aboutContainer">
        <div className="about-side-nav">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Test image"
            style={{ borderRadius: "50%", width: "250px", height: "250px" }}
          />
        </div>
        <div id="aboutme">
          <h1>Hello and Welcome !</h1>
          <p>
            I am Badal Sarkar, software developer living in Toronto, Canada.
            Currently, I am studying Computer Programming and Analysis at Seneca
            College and will graduate in April 2021.
          </p>
          <p>
            I have been coding since 2016. Visual Basic for Applications was my
            first programming language. So far, I have worked with C, C++, Java,
            JavaScript and Python. Now a days, I am focusing more on Java and
            Python. In Java, I am working with Spring framework and in Python, I
            am focusing on fundamentals. My primary learning mode is by reading
            books and technical documentation. I learn more effectively this way
            rather than watching tutorials.
          </p>
          <p>
            I don't have any favorite language or technology. I like to consider
            them just as tools to solve some problems. When solving a problem, I
            will pick the most suitable tool.
          </p>
          <h4>How I started programming</h4>
          <p>
            Till 2018, I was a banker, working at CIBC, Toronto, Canada. After
            completing my Master's degree in Finance, I started my career in
            2010 as a banker in my home country, Bangladesh. Throughout my
            career, I had a passion to solve problem and make processes easier
            and efficient. While working at Mutual Trust Bank, Bangladesh, I
            implemented several process improvements and automated some
            regulatory reporting systems. My interest led me to self-taught
            Visual Basic for Applications (VBA) which is used extensively for
            streamlining excel workflows in the Banking industry in Canada. With
            my knowledge of coding, I started to look for opportunities to put
            my skill into work. During my employment period at CIBC, I have
            improved several processes including semi-automating a
            reconciliation system and transaction entry into core banking
            software.
          </p>
          <p>
            This achievement encouraged me to look into the coding stuff. So, I
            started with HTML, CSS at{" "}
            <Link to="https://www.freecodecamp.org/" target="__blank">
              freecodecamp.
            </Link>
            Later, in early 2018, I started to think more seriously about
            programming and was considering to go back to school. Due to my
            family situation, it was not possible to continue both my job and
            school. So, I decided to leave my job and focus on studying. It was
            a tough call. But I believe, I made the right decision.
          </p>
          <p>
            Today, I absolutely love programming. Solving a problem, gives me
            the highest satisfaction.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
