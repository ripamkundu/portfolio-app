import React from 'react'
import "./Experience.css"
import Card from "./Card"
import data from "./Experience-Api"

const Experience = () => {
  return (
    <>
      <section className='Experience' id='Experience'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4> 1+ YEARS OF EXPIENCE</h4>
            <h1>My Resume & Qualification</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2016 - 2023</h4>
                <h1>Education Qualification</h1>
              </div>

              <div className='content'>
                {data.map((val, id) => {
                    if (val.category === "Education") {
                      return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }
                  })}
              </div>
            </div>

            <div className='left'>
              <div className='heading'>
                <h4>2021-2023</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {data.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Experience
