import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '~paragon-react';
import { ComponentNavItem, IComponentNavItem } from './Menu';

const componentsQuery = graphql`
  query componentsQuery {
    components: allMdx(
      filter: {
        parent: {
          internal: { owner: { nin: "gatsby-transformer-react-docgen" } }
        }
        frontmatter: { type: {} }
      }
      sort: { frontmatter: {title: ASC} }
    ) {
      all: nodes {
        ...ComponentPage
      }
    }
  }

  fragment ComponentPage on Mdx {
    id
    frontmatter {
      categories
      type
      title
      status
    }
    fields {
      slug
    }
  }
`;

function ComponentsList() {
  const { components } = useStaticQuery(componentsQuery);
  const { all } = components;

  return (
    <Container className="py-3 bg-light-200 border-top border-light-300">
      <Container size="xl" className="py-5">
        <div className="pgn-doc__menu-all-components pt-5">
          <h3 className="mb-4">All components (A-Z)</h3>
          <ul className="pgn-doc__menu-component-list list-unstyled small mb-4">
            {all.map((node: IComponentNavItem) => <ComponentNavItem key={node.id} {...node} />)}
          </ul>
        </div>
      </Container>
    </Container>
  );
}

export default ComponentsList;
