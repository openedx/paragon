/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from '~paragon-react';
import SEO from '../../components/SEO';
import MeasuredItem from '../../components/MeasuredItem';
import Layout from '../../components/PageLayout';

export type WeightLabelsTypes = {
  [key: string]: string,
};

const weightLabels: WeightLabelsTypes = {
  200: 'Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Medium',
  700: 'Bold',
  800: 'Black',
};

const measuredTypeProps = {
  properties: ['font-size', 'line-height', 'font-family', 'font-weight'],
  renderAfter: (measurements: { [x: string]: string; }) => {
    const fontFamily = measurements['font-family']
      ? measurements['font-family'].split(',')[0]
      : null;
    const weight = weightLabels[measurements['font-weight']];
    // only one significant digit if needed
    const fontSize = Math.round(Number.parseFloat(measurements['font-size']) * 10) / 10;
    const lineHeight = Math.round(Number.parseFloat(measurements['line-height']) * 10) / 10;

    return (
      <p className="m-0 text-muted">
        <span className="mr-2">
          {fontFamily} {weight}
        </span>
        {fontSize}px / {lineHeight}px
      </p>
    );
  },
};

export default function TypographyPage() {
  return (
    <Layout>
      <Container size="xl" className="py-5">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Typography" />
        <h1>Typography</h1>
        <table className="w-100 table pgn-doc__status-table">
          <tbody>
            <tr>
              <th colSpan={3}>
                <h2 className="mt-3">Headings</h2>
              </th>
            </tr>
            <tr>
              <th>Desktop</th>
              <th>Mobile</th>
              <th>CSS Class</th>
            </tr>
            {[1, 2, 3, 4, 5, 6].map(headingSize => (
              <tr key={headingSize}>
                <td>
                  <MeasuredItem {...measuredTypeProps}>
                    <p className={`m-0 h${headingSize}`}>
                      Heading {headingSize}
                    </p>
                  </MeasuredItem>
                </td>
                <td className="mobile-type">
                  <MeasuredItem {...measuredTypeProps}>
                    <p className={`m-0 h${headingSize}`}>
                      Heading {headingSize}
                    </p>
                  </MeasuredItem>
                </td>
                <td>
                  <code>.h{headingSize}</code>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="heading-label">Heading Label</p>
                </MeasuredItem>
                A heading label is usually paired with and proceeds a Heading.
              </td>
              <td>
                <code>.heading-label</code>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th colSpan={3}>
                <h2 className="mt-3">Body</h2>
              </th>
            </tr>
            <tr>
              <th colSpan={2}>Desktop & Mobile</th>
              <th>CSS Class</th>
            </tr>
            <tr>
              <td colSpan={2}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="lead m-0">Large Body</p>
                </MeasuredItem>
              </td>
              <td>
                <code>.lead</code>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="m-0">Body</p>
                </MeasuredItem>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="small m-0">Small Body</p>
                </MeasuredItem>
              </td>
              <td>
                <code>.small</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="x-small m-0">Extra Small Body</p>
                </MeasuredItem>
              </td>
              <td>
                <code>.x-small</code>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <MeasuredItem {...measuredTypeProps}>
                  <p className="micro m-0">Micro Body</p>
                </MeasuredItem>
              </td>
              <td>
                <code>.micro</code>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th colSpan={3}>
                <h2 className="mt-3">Display</h2>
              </th>
            </tr>
            <tr>
              <th>Desktop</th>
              <th>Mobile</th>
              <th>CSS Class</th>
            </tr>
            {[1, 2, 3, 4].map(displaySize => (
              <tr key={displaySize}>
                <td>
                  <MeasuredItem {...measuredTypeProps}>
                    <p className={`m-0 display-${displaySize}`}>
                      Display {displaySize}
                    </p>
                  </MeasuredItem>
                </td>
                <td className="mobile-type">
                  <MeasuredItem {...measuredTypeProps}>
                    <p className={`m-0 display-${displaySize}`}>
                      Display {displaySize}
                    </p>
                  </MeasuredItem>
                </td>
                <td>
                  <code>.display-{displaySize}</code>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <th colSpan={3}>
                <h2 className="mt-3">Links</h2>
              </th>
            </tr>
            <tr>
              <td colSpan={2}>
                <a href="#">Standalone Link</a>
              </td>
              <td>
                <small>
                  The default style for <code>a</code> tags that don&apos;t appear in
                  a <code>p</code> tag.
                </small>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p>
                  An{' '}
                  <a className="inline-link" href="#">
                    inline link
                  </a>{' '}
                  in a sentence.
                </p>
              </td>
              <td>
                <small>
                  For links inside a <code>p</code> or with the{' '}
                  <code>.inline-link</code> class name.
                </small>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <a className="muted-link" href="#">
                  Muted, Standalone Link
                </a>
              </td>
              <td>
                <small>
                  <code>.muted-link</code> not in a <code>p</code> tag.
                </small>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p>
                  An{' '}
                  <a className="muted-link inline-link" href="#">
                    muted, inline link
                  </a>{' '}
                  in a sentence.
                </p>
              </td>
              <td>
                <small>
                  For <code>.muted-link</code> links inside a <code>p</code> or
                  with the <code>.inline-link</code> class name.
                </small>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 table pgn-doc__status-table">
          <tbody>
            <tr>
              <th colSpan={2}>
                <h2>Decoration and Emphasis</h2>
              </th>
            </tr>
            <tr>
              <th>Style</th>
              <th>CSS Class</th>
            </tr>
            <tr>
              <td>
                <p className="text-lowercase">Lowercase text.</p>
              </td>
              <td>
                <code>.text-lowercase</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-uppercase">uppercase text.</p>
              </td>
              <td>
                <code>.text-uppercase</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-capitalize">capitalize text.</p>
              </td>
              <td>
                <code>.text-capitalize</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-decoration-none">No decorations.</p>
              </td>
              <td>
                <code>.text-decoration-none</code>
              </td>
            </tr>

            <tr>
              <td>
                <p className="text-italic">Italic text.</p>
              </td>
              <td>
                <code>.text-italic</code>
              </td>
            </tr>

            <tr>
              <td>
                <p className="font-weight-bold">Bold text.</p>
              </td>
              <td>
                <code>.font-weight-bold</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-weight-normal">Regular text.</p>
              </td>
              <td>
                <code>.font-weight-normal</code>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-100 table pgn-doc__status-table">
          <tbody>
            <tr>
              <th colSpan={2}>
                <h2>Alignment</h2>
              </th>
            </tr>
            <tr>
              <th>Style</th>
              <th>CSS Class</th>
            </tr>
            <tr>
              <td>
                <p className="text-left">left text.</p>
              </td>
              <td>
                <code>.text-left</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-right">right text.</p>
              </td>
              <td>
                <code>.text-right</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-center">center text.</p>
              </td>
              <td>
                <code>.text-center</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-justify">justify text.</p>
                <p
                  className="text-justify text-muted small"
                  style={{ maxWidth: '20rem' }}
                >
                  At the edge of forever tendrils of gossamer clouds corpus
                  callosum culture Vangelis dispassionate extraterrestrial
                  observer.
                </p>
              </td>
              <td>
                <code>.text-justify</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-wrap">wrap text.</p>
              </td>
              <td>
                <code>.text-wrap</code>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-nowrap">nowrap text.</p>
              </td>
              <td>
                <code>.text-nowrap</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  );
}
