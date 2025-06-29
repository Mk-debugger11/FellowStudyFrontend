import React from 'react'
import ProjectHero from '../components/projects/projectHero'
import ProjectStandout from '../components/projects/projectStandout'
import Footer from '../components/footer'
import CustomProjectForm from '../components/projects/customProjectModal'
import Support from '../components/assignments/support'
function Project() {
  return (
    <>
    <ProjectHero />
    <ProjectStandout />
    <CustomProjectForm />
    <Support />
    <Footer/>
    </>
  )
}

export default Project