/*a react component with 5 cicrles that turn red when clicked and all display diffrent <information></information>
*/
import React from "react";
import "../componentcss/project2.css";
export const Project2 = () => {
    return (
        <div className="projects-containter">
            <h1>Project 2</h1>
            <div className="circle" id="circle1"></div>
            <div className="circle" id="circle2"></div>
            <div className="circle" id="circle3"></div>
            <div className="circle" id="circle4"></div>
            <div className="circle" id="circle5"></div>
        </div>
    )
}