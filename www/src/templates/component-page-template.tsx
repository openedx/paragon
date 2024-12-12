import React, { useContext, useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import classNames from 'classnames';
import {
  Container,
  Alert,
  breakpoints,
  useMediaQuery,
  Stack,
} from '~paragon-react';
import { SettingsContext } from '../context/SettingsContext';
import { DEFAULT_THEME } from '../../theme-config';
import CodeBlock from '../components/CodeBlock';
import GenericPropsTable from '../components/PropsTable';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';
import LinkedHeading from '../components/LinkedHeading';
import ComponentsUsage from '../components/insights/ComponentsUsage';
import LeaveFeedback from '../components/LeaveFeedback';
import PageEditBtn from '../components/PageEditBtn';

export interface IPageTemplate {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        status: string,
        components: string,
        notes: string,
      },
      tableOfContents: {
        items: Array<{}>,
      },
      body: string,
    },
    components: {
      nodes: [],
    }
  },
  pageContext: {
    scssVariablesData: Record<string, string>,
    componentsUsageInsights: string[],
    githubEditPath: string,
  },
  children: React.ReactNode,
}

export type ShortCodesTypes = {
  displayName: string,
};

export default function PageTemplate({
  data: { mdx, components: componentNodes },
  pageContext: { scssVariablesData, componentsUsageInsights, githubEditPath },
  children,
}: IPageTemplate) {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.large.maxWidth });
  const [showMinimizedTitle, setShowMinimizedTitle] = useState(false);
  const { settings } = useContext(SettingsContext);
  const { theme } = settings;
  const scssVariables = scssVariablesData[theme!] || scssVariablesData[DEFAULT_THEME!];

  const components = componentNodes.nodes
    .reduce((acc: { [x: string]: { displayName: string, props?: [] }; }, currentValue: { displayName: string; }) => {
      acc[currentValue.displayName] = currentValue;
      return acc;
    }, {});

  const shortcodes = React.useMemo(() => {
    function PropsTable({ displayName, ...props }: ShortCodesTypes) { // eslint-disable-line react/prop-types
      if (components[displayName]) {
        return <GenericPropsTable {...components[displayName]} {...props} />;
      }
      return null;
    }
    // Provide common components here
    return {
      h2: (props: JSX.IntrinsicElements['h2']) => <LinkedHeading h="2" {...props} />,
      h3: (props: JSX.IntrinsicElements['h3']) => <LinkedHeading h="3" {...props} />,
      h4: (props: JSX.IntrinsicElements['h4']) => <LinkedHeading h="4" {...props} />,
      h5: (props: JSX.IntrinsicElements['h5']) => <LinkedHeading h="5" {...props} />,
      h6: (props: JSX.IntrinsicElements['h6']) => <LinkedHeading h="6" {...props} />,
      pre: (props: JSX.IntrinsicElements['pre']) => <div {...props as any} />,
      code: CodeBlock,
      Link,
      PropsTable,
    };
  }, [components]);

  const scssVariablesTitle = 'Theme Variables (SCSS)';
  const scssVariablesUrl = 'theme-variables-scss';

  const propsAPITitle = 'Props API';
  const propsAPIUrl = 'props-api';

  const usageInsightsTitle = 'Usage Insights';
  const usageInsightsUrl = 'usage-insights';

  const sortedComponentNames = mdx.frontmatter?.components || [];
  const filteredComponentsUsageInsights = componentsUsageInsights.map(componentName => componentName.replace(/\./g, ''));
  const isUsageInsights = (sortedComponentNames as []).some(value => filteredComponentsUsageInsights.includes(value));

  const getTocData = () => {
    const tableOfContents = JSON.parse(JSON.stringify(mdx.tableOfContents));
    if (Object.values(scssVariablesData).some(data => data) && !tableOfContents.items?.includes()) {
      tableOfContents.items?.push({
        title: scssVariablesTitle,
        url: `#${scssVariablesUrl}`,
      });
    }
    tableOfContents.items?.push({ title: propsAPITitle, url: `#${propsAPIUrl}` });
    if (isUsageInsights) {
      tableOfContents.items?.push({
        title: usageInsightsTitle,
        url: `#${usageInsightsUrl}`,
      });
    }
    return tableOfContents;
  };

  const isDeprecated = mdx.frontmatter?.status?.toLowerCase().includes('deprecate') || false;

  useEffect(() => setShowMinimizedTitle(!!isMobile), [isMobile]);

  return (
    <Layout
      showMinimizedTitle={showMinimizedTitle}
      isMdx
      tocData={getTocData()}
      githubEditPath={githubEditPath}
    >
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title={mdx.frontmatter.title} />
      <Container size={settings.containerWidth} className="py-5">
        {isDeprecated && (
          <Alert variant="warning">
            <Alert.Heading>This component will be removed soon.</Alert.Heading>
            <p className="small mb-0">{mdx.frontmatter.notes}</p>
          </Alert>
        )}
        <Stack
          className={classNames('justify-content-between', {
            'flex-column-reverse align-items-start': isMobile,
          })}
          direction="horizontal"
        >
          <h1>
            {mdx.frontmatter.title}
          </h1>
          <Stack
            className={classNames('mb-2', { 'justify-content-end': isMobile })}
            direction="horizontal"
            gap={2}
          >
            <PageEditBtn githubEditPath={githubEditPath} />
            <LeaveFeedback />
          </Stack>
        </Stack>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
        {scssVariables && (
          <div className="mb-5">
            <h2 className="mb-4 pgn-doc__heading" id={scssVariablesUrl}>
              {scssVariablesTitle}
              <a href={`#${scssVariablesUrl}`} aria-label="Jump to SCSS variables">
                <span className="pgn-doc__anchor">#</span>
              </a>
            </h2>
            <CodeBlock className="language-scss">{scssVariables}</CodeBlock>
          </div>
        )}
        {components[sortedComponentNames[0]]?.props && (
          <h2 className="mb-5 pgn-doc__heading" id={propsAPIUrl}>
            {propsAPITitle}
            <a href={`#${propsAPIUrl}`} aria-label="Props API">
              <span className="pgn-doc__anchor">#</span>
            </a>
          </h2>
        )}
        {typeof sortedComponentNames !== 'string' && sortedComponentNames?.map((componentName: string | number) => {
          const node: { displayName: string } = components[componentName];
          if (!node) {
            return null;
          }
          return <GenericPropsTable key={node.displayName} {...node} />;
        })}
        {isUsageInsights && (
          <>
            <h2 className="pgn-doc__heading m-0" id={usageInsightsUrl}>
              {usageInsightsTitle}
              <a href={`#${usageInsightsUrl}`} aria-label="Usage Insights">
                <span className="pgn-doc__anchor">#</span>
              </a>
            </h2>
            <ComponentsUsage data={(sortedComponentNames as string[])} />
          </>
        )}
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ComponentPageQuery($id: String, $components: [String]) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        status
        notes
        components
      }
      tableOfContents
    }
    components: allComponentMetadata(
      filter: { displayName: { in: $components } }
    ) {
      nodes {
        ...ComponentDocGenData
      }
    }
  }

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
        id
        text
      }
    }
  }
`;
