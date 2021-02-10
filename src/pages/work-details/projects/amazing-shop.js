import SubHeader from "../../../components/sub-header"
import React from "react"
import ProjectWorkDetails from "../../../components/workdetails/ProjectWorkDetails";
import {AmazingShopData} from "../../../data/projectdata/AmazingShopData";
import {AmazingShopView} from "../../../components/projectView/amazingShopView";

const AmazingShopWorkDetail = ({ location }) => {
    return (
        <React.Fragment>
            <SubHeader />
            <ProjectWorkDetails name={AmazingShopData.summary.name} data={AmazingShopData.details} projectView={AmazingShopView} />
        </React.Fragment>
    )
}

export default AmazingShopWorkDetail;