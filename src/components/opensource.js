import React from "react"
import WorkCard from "./utilities/workCard"

const OpenSource = [
  {
    name: "PayPal/Butterfly",
    description: "An application transformation tool, managed by PayPal.",
    tools: ["Java", "Gradle", "TestNG", "LOG4J2"],
    contribution: 5,
    contributionLink:
      "https://github.com/pulls?q=is%3Apr+author%3Abadalsarkar+archived%3Afalse+is%3Aclosed+repo%3Apaypal%2Fbutterfly",
  },
  {
    name: "Bennyboer/Thaw",
    description:
      "Thaw is a tool to create documents with export to PDF in a text-concentrated working style. It offers a feature-rich and easy to learn markup language that you can write your documents in a human-readable way.",
    tools: ["Java", "Gradle"],
    contribution: 1,
    contributionLink:
      "https://github.com/pulls?q=is%3Apr+author%3Abadalsarkar+archived%3Afalse+is%3Aclosed+repo%3Abennyboer%2Fthaw",
  },
  {
    name: "Seneca-CDOT/Telescope",
    description:
      "Telescope is an open source web server and client application for aggregating and presenting a timeline of Seneca's open source blogs.",
    tools: ["JavaScript", "Travis CI"],
    contribution: 1,
    contributionLink:
      "https://github.com/pulls?q=is%3Apr+author%3Abadalsarkar+archived%3Afalse+is%3Aclosed+repo%3ASeneca-CDOT%2Ftelescope",
  },
]

const OpenSourceContribution = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  return (
    <div style={style}>
      {OpenSource.map(item => (
        <WorkCard
          name={item.name}
          description={item.description}
          tools={item.tools}
          contribution={item.contribution}
          contributionLink={item.contributionLink}
        />
      ))}
    </div>
  )
}

export default OpenSourceContribution
