import React from "react"
import { Link } from "gatsby"
import { connect } from 'react-redux';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import CourseCard from '../components/dashboard/CourseCard';

import { toggleDarkMode } from '../state/app'

const IndexPage = ({ isDarkMode, dispatch }) => (
  <Layout>
    <SEO title="Dashboard" />
    <h2 className="h5">My Courses</h2>

    <CourseCard
      image="url"
      title="Introduction to Animal Behaviour"
      provider="WageningenX"
      courseCode="AB101x"
      verified={false}
      canUpgrade
      resumeURL="url"
    />

    <button 
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
    >
      Toggle Dark {isDarkMode ? 'on': 'off'}
    </button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
}), null)(IndexPage);
