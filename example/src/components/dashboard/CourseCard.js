import React from "react"
import { Link } from "gatsby"

import { Button } from '~paragon-react';

const CourseCard = ({
  image,
  title,
  provider,
  courseCode,
  verified,
  canUpgrade,
  resumeURL,
}) => (
  <div className="card">

      {image}
      <div className="p-3">
        <h3>{title}</h3>
        <p>{provider} - {courseCode}</p>
        {verified}
        {canUpgrade}
        {resumeURL}
      <div>
        <Button href={resumeURL} className="btn-outline-primary">Resume</Button>
      </div>
      </div>
  </div>
)

export default CourseCard
