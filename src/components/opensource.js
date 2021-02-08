import React from "react"
import WorkCard from "./utilities/workCard"
import { PayPalData } from "../data/opensourcedata/PayPalData"
import { ThawData } from "../data/opensourcedata/ThawData"
import { TelescopeData } from "../data/opensourcedata/TelecsopeData"

const OpenSource = [PayPalData, ThawData, TelescopeData]

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
          name={item.summary.name}
          description={item.summary.description}
          tools={item.summary.tools}
          contribution={item.details.completedWork.length}
          contributionLink={item.summary.contributionLink}
          detailsLink={item.summary.detailsLink}
        />
      ))}
    </div>
  )
}

export default OpenSourceContribution
