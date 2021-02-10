import React from "react"

const style = {
  border: "1px solid #1f3080",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: ".80rem",
  padding: "3px",
  margin: "10px",
  backgroundColor: "#1f3080",
  color: "white",
  textAlign: "center",
}

const NewFeatureTag = () => {
  const Featurestyle = {
    ...style,
    border: "1px solid #1f3080",
    backgroundColor: "#1f3080",
  }
  return <span style={Featurestyle}>New Feature</span>
}

const BugFixTag = () => {
  const BugFixStyle = {
    ...style,
    border: "1px solid #d1524f",
    backgroundColor: "#d1524f",
  }
  return <span style={BugFixStyle}>Bug Fix</span>
}

const Tag = ({ name }) => {
  if (name == "New Feature") {
    return <NewFeatureTag />
  }
  if (name == "Bug Fix") {
    return <BugFixTag />
  }
}

export default Tag
