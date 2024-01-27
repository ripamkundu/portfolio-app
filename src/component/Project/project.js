import React from 'react'
import project_data from "./project_data"
import Card from './Card'
import "./project.css"

const project = () => {
  return (
    <>
        <section className='project top' id='project'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>VISIT MY PORTFOLIO</h4>
                    <h1>My PortFolio</h1>
                </div>

                <div className='content grid'>
                    {project_data.map((value, index) => {
                        return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
                    })}
                </div>
            </div>

        </section>
      
    </>
  )
}

export default project
