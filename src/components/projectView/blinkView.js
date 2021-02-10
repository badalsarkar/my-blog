import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Image from "gatsby-image";
import Img from "gatsby-image";
import BlinkWithColor from "/src/gifs/blinkWithColor.gif"
import BlinkWithCurl from "/src/gifs/BlinkWIthCurl.gif"

export const BlinkView = () => {
    const gifSource = "./blinkWithColor.gif"
    const BlinkOption = useStaticQuery(graphql`
query BlinkOption {
  file(relativePath: {eq: "blinkOption.png"}) {
    id
    childImageSharp {
      fixed (width:620){
        base64
        height
        src
        srcSet
        aspectRatio
        width
      }
    }
  }
}
  `)
    return (
        // <React.Fragment>
        <div>
            <h5>Available Features</h5>
            <div>
                <ul>
                    <li>Check invalid URL with HTTP/HTTPS scheme in a html/txt file</li>
                    <li>Color output of validation result</li>
                    <li>Use environmental variable to control color print. Set CLICOLOR=1 for color print to console.
                    </li>
                </ul>
            </div>
            <h5>Available Options</h5>
            <Img
                fixed={BlinkOption.file.childImageSharp.fixed}
                alt="Blink Options"
                // style={{ width: "700px", height: "700px" }}
            />
            <h5>Blink demo</h5>
            <p>Here we see <code>Blink</code> is taking a file as input and outputting the status of each
                URL. <code>Blink</code> can be configured to output the result in color. Here the red colored URLs are
                dead, yellow colored ones are redirect and the green ones are valid URL.</p>
            <img src={BlinkWithColor} width="100%" style={{marginBottom:"45px"}}/>
            <br/>
            <p>Blink can also take text output from another process. Here I am making an http request
                with <code>cURL</code> and piping the
                result to Blink to detect dead URL in the page.</p>
            <img src={BlinkWithCurl} width="100%"/>
        </div>

        // </React.Fragment>
    )
}