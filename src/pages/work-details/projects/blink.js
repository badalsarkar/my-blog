import SubHeader from "../../../components/sub-header"
import React from "react"
import ProjectWorkDetails from "../../../components/workdetails/ProjectWorkDetails";
import {BlinkView} from "../../../components/projectView/blinkView";
import {BlinkData} from "../../../data/projectdata/BlinkData";

const BlinkWorkDetail = ({ location }) => {
  return (
    <React.Fragment>
      <SubHeader />
      <ProjectWorkDetails name={BlinkData.summary.name} data={BlinkData.details} projectView={BlinkView}/>
    </React.Fragment>
  )
}

export default BlinkWorkDetail;
