import React from 'react'
import "./about.css"
import Card from './Card'
import data from './about-Api'

const About = () => {
  return (
    <>
        <section className='about top' id='about'>
            <div className='container'>
                <div className='heading'>
                    <h4>About Us</h4>
                    <h1>What I Do</h1>
                </div>
                <div className='content grid'>
                {data.map((val, index) => {
                        return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default About
