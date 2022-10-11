// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Contact Me</title>

// Step 3: Export your component
export default ContactPage