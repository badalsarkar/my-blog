import React from "react"
import WorkCard from "./utilities/workCard"
import {BlinkData} from "../data/projectdata/BlinkData";
import {AmazingShopData} from "../data/projectdata/AmazingShopData";
import {AidManagementData} from "../data/projectdata/AidManagementData";

const Projects = [BlinkData,AmazingShopData,AidManagementData]


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
          name={item.summary.name}
          description={item.summary.description}
          tools={item.summary.tools}
          detailsLink={item.summary.detailsLink}
        />
      ))}
    </div>
  )
}

export default ProjectWork
