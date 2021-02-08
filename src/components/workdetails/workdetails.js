import { Link } from "gatsby"
import React from "react"
import { Fragment } from "react"
import Style from "./workdetails.module.css"
import Tag from "../utilities/tag"

const WorkDetails = ({ name, data }) => {
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
            <div className={Style.item}>
              {data.currentlyWorking.length > 0 && (
                <Fragment>
                  <h5>Currently working on</h5>
                  <div>
                    <ul>
                      {data.currentlyWorking.map(item => {
                        return (
                          <li>
                            <Link to={item.link} target="__blank">
                              {item.title}
                            </Link>
                            <Tag name={item.type} />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Fragment>
              )}

              {data.completedWork.length > 0 && (
                <Fragment>
                  <h5>Completed PRs</h5>
                  <div>
                    <ul>
                      {data.completedWork.map(item => {
                        return (
                          <li>
                            <Link to={item.link} target="__blank">
                              {item.title}
                            </Link>
                            <Tag name={item.type} />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </Fragment>
              )}
            </div>

            {/* My blogs */}
            {data.blogs.length > 0 && (
              <Fragment>
                <div className={Style.item} id={Style.blog}>
                  <h5>My blog about my work</h5>
                  <div>
                    <ul>
                      {data.completedWork.map(item => {
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

export default WorkDetails
