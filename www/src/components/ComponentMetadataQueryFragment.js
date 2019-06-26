import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
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
    }
  }
`;
