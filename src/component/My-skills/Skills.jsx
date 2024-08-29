import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <>
            <h1 className='My-Skills'>My Skills</h1>

            <div className='skills-container'>
                <div className="skill">
                    <h3>95%</h3>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <h3>80%</h3>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <h3>60%</h3>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <h3>80%</h3>
                    <p>React JS</p>
                </div>
            </div>
        </>
    )
}

export default Skills
