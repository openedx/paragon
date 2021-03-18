/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
import { Container } from '~paragon-react';
 import { MDXProvider, MDXRenderer } from "@mdx-js/react"
 import '../scss/index.scss';


 const MyPageLayout = (props) => {
  return (
    <Container size="lg">
      <h1>Components</h1>
      {props.children}
    </Container>
  );
}

export default MyPageLayout;
