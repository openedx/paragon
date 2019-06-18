import { graphql } from 'gatsby';

export const query = graphql`
  fragment ComponentDocGenData on ComponentMetadata {
    displayName
    props {
      defaultValue {
        value
      }
      name
      type {
        name
        raw
        value
      }
      required
      docblock
      doclets
      description {
        text
      }
    }
    description {
      text
    }
  }
`;
