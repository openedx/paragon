import React, { Component } from 'react';

import MainNav from './MainNav';
import CourseNav from './CourseNav';

export default class CourseHeader extends Component {
  render() {
    const course = {
      number: 'INST101X',
      name: 'Interesting Course Title',
      tabs: [
        'Syllabus',
        'Discussion',
        'Progress',
        'Instructor'
      ]
    };
    const user = {
      displayName: 'FooBar McBaz',
      image: 'http://placehold.it/40x40'
    };

    return (
      <div className="header">
        <MainNav course={course} user={user} />
        <CourseNav course={course} />
      </div>
    );
  }
}
