// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const ProjectPage = () => {
  return (
    <Layout>
      <p>Projects</p>
    </Layout>
  )
}

export const Head = () => <title>Project Page</title>

// Step 3: Export your component
export default ProjectPage