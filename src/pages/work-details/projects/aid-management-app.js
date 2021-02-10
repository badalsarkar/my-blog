import SubHeader from "../../../components/sub-header"
import React from "react"
import ProjectWorkDetails from "../../../components/workdetails/ProjectWorkDetails";
import {AidManagementData} from "../../../data/projectdata/AidManagementData";
import {AidManagementView} from "../../../components/projectView/aidManagementView";

const AidManagementAppWorkDetail = ({location}) => {
    return (
        <React.Fragment>
            <SubHeader/>
            <ProjectWorkDetails name={AidManagementData.summary.name} data={AidManagementData.details}
                                projectView={AidManagementView}/>
        </React.Fragment>
    )
}

export default AidManagementAppWorkDetail;