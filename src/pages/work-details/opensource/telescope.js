import SubHeader from "../../../components/sub-header"
import React from "react"
import WorkDetails from "../../../components/workdetails/workdetails"
import { TelescopeData } from "../../../data/opensourcedata/TelecsopeData"

const TelescopeWorkDetail = ({ location }) => {
  return (
    <React.Fragment>
      <SubHeader />
      <WorkDetails
        name={TelescopeData.summary.name}
        data={TelescopeData.details}
      />
    </React.Fragment>
  )
}

export default TelescopeWorkDetail
