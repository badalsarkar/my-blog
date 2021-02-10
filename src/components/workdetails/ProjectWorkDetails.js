import {Link} from "gatsby"
import React from "react"
import {Fragment} from "react"
import Style from "./projectWorkdetails.module.css"

const ProjectWorkDetails = ({name, data, projectView}) => {
    const ProjectView=projectView;
    return (
        <Fragment>
            <div className={Style.container}>
                <div>
                    <h3>About {name}</h3>
                    <p>{data.about}</p>
                    <h5>Tech stack</h5>
                    {data.tools.map(item => (
                        <span className={Style.tag}>{item}</span>
                    ))}
                    <div className={Style.subcontainer}>
                        <div id={Style.about}>
                            <ProjectView/>
                        </div>
                            {/* My blogs */}
                            {data.blogs.length > 0 && (
                                <Fragment>
                                    <div className={Style.item} id={Style.blog}>
                                        <h5>My blog about my work</h5>
                                        <div>
                                            <ul>
                                                {data.blogs.map(item => {
                                                    return (
                                                        <li>
                                                            <Link to={item.link} target="__blank">
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>
        </Fragment>
)
}

export default ProjectWorkDetails
