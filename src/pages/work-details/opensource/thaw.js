import SubHeader from "../../../components/sub-header"
import React from "react"
import WorkDetails from "../../../components/workdetails/workdetails"
import { ThawData } from "../../../data/opensourcedata/ThawData"

const PaypalButterflyWorkDetail = ({ location }) => {
  return (
    <React.Fragment>
      <SubHeader />
      <WorkDetails name={ThawData.summary.name} data={ThawData.details} />
    </React.Fragment>
  )
}

export default PaypalButterflyWorkDetail
