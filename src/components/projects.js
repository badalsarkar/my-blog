import React from "react"
import WorkCard from "./utilities/workCard"

const Projects = [
  {
    name: "Blink",
    description:
      "A CLI application to detect dead URL and check URL in WayBack machine.",
    tools: ["Java", "Maven", "JUnit5", "GitHub Actions"],
  },
  {
    name: "Amazing Shop",
    description: "An E-Commerce application.",
    tools: ["Java", "Spring", "Maven", "JUnit5"],
  },
  {
    name: "Aid Management Application",
    description: "A console application that helps manage Aid distribution.",
    tools: ["C++", "GDB"],
  },
]

const ProjectWork = () => {
  const style = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }

  return (
    <div style={style}>
      {Projects.map(item => (
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

export default ProjectWork
