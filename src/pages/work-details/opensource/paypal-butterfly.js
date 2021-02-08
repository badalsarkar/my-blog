import SubHeader from "../../../components/sub-header"
import React from "react"
import WorkDetails from "../../../components/workdetails/workdetails"
import { PayPalData } from "../../../data/opensourcedata/PayPalData"

const PaypalButterflyWorkDetail = ({ location }) => {
  return (
    <React.Fragment>
      <SubHeader />
      <WorkDetails name="PayPal/Butterfly" data={PayPalData.details} />
    </React.Fragment>
  )
}

export default PaypalButterflyWorkDetail
