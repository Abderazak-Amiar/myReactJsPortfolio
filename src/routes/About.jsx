import React from "react";

function About(){

    return (
    <div className="container mt-5 pt-5 h-100">
            <div className="row justify-content-between align-items-center">
            <div className="col-md-5 bgimagehome rounded-circle m-3">
                    <img className="w-100 h-auto " src="./images/desktop.png" alt="" />
                </div>
                <div className="col-md-5 p-3">
                    <h5>About</h5>
                    <h1>About Me</h1>
                    <h1>I create <span className="webapp-span">web applications</span></h1>
                    <p>I am a software engineer, focused on the web development with all related JavaScript technologies.
                        I love web design and I like to build prototypes that comply with the UX process and make them real with a piece of code.</p>
                <button type="button" className="btn btn-primary">Get in touch</button>
                </div>
              
            </div>
    </div>
    )}
export default About;