import React from 'react';
import SEO from '../../components/seo';
import MeasuredItem from '../../components/MeasuredItem';


const weightLabels = {
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
  renderAfter: (measurements) => {
    const fontFamily = measurements['font-family'] ?
      measurements['font-family'].split(',')[0] : null;
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


export default function () {
  return (
    <div>
      <SEO title="Typography" />

      <h1>Typography</h1>

      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colSpan="3">
              <h2 className="mt-3">Headings</h2>
              <p className="font-weight-normal">Headings all share a line-height of 1.25em</p>
            </th>
          </tr>
          <tr>
            <th>Desktop</th>
            <th>Mobile</th>
            <th>CSS Class</th>
          </tr>
          {[1, 2, 3, 4, 5, 6].map(headingSize => (
            <tr>
              <td>
                <MeasuredItem {...measuredTypeProps}>
                  <p className={`m-0 h${headingSize}`}>Header {headingSize}</p>
                </MeasuredItem>
              </td>
              <td className="mobile-type">
                <MeasuredItem {...measuredTypeProps}>
                  <p className={`m-0 h${headingSize}`}>Header {headingSize}</p>
                </MeasuredItem>
              </td>
              <td>
                <code>.h{headingSize}</code>
              </td>
            </tr>
          ))}
        </tbody>
        <tbody>
          <tr>
            <th colSpan="3">
              <h2 className="mt-3">Body</h2>
            </th>
          </tr>
          <tr>
            <th colSpan="2">Desktop & Mobile</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="lead m-0">Large Body</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.lead</code>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="m-0">Body</p>
              </MeasuredItem>
            </td>
            <td />
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="small m-0">Small Body</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.small</code>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="x-small m-0">Extra Small Body</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.x-small</code>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th colSpan="3">
              <h2 className="mt-3">Forms</h2>
              <p className="font-weight-normal">Form text line-heights are the same as headings: 1.25em.</p>
            </th>
          </tr>
          <tr>
            <th colSpan="2">Desktop & Mobile</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <label className="m-0">Label</label>{/* eslint-disable-line */}
              </MeasuredItem>
            </td>
            <td>
              <small>Same as h6</small>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="m-0">Helper</p>
              </MeasuredItem>
            </td>
            <td>
              <small>Same as body</small>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="small m-0">Helper Small</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.small</code><br />
              <small>Same as small body</small>
            </td>
          </tr>
        </tbody>
      </table>


      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colSpan="2">
              <h2>Decoration and Emphasis</h2>
            </th>
          </tr>
          <tr>
            <th>Style</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td><p className="text-lowercase">Lowercase text.</p></td>
            <td><code>.text-lowercase</code></td>
          </tr>
          <tr>
            <td><p className="text-uppercase">uppercase text.</p></td>
            <td><code>.text-uppercase</code></td>
          </tr>
          <tr>
            <td><p className="text-capitalize">capitalize text.</p></td>
            <td><code>.text-capitalize</code></td>
          </tr>
          <tr>
            <td><p className="text-decoration-none">No decorations.</p></td>
            <td><code>.text-decoration-none</code></td>
          </tr>

          <tr>
            <td><p className="text-italic">Italic text.</p></td>
            <td><code>.text-italic</code></td>
          </tr>

          <tr>
            <td><p className="font-weight-bold">Bold text.</p></td>
            <td><code>.font-weight-bold</code></td>
          </tr>
          <tr>
            <td><p className="font-weight-normal">Regular text.</p></td>
            <td><code>.font-weight-normal</code></td>
          </tr>
        </tbody>
      </table>

      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colSpan="2">
              <h2>Alignment</h2>
            </th>
          </tr>
          <tr>
            <th>Style</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td><p className="text-left">left text.</p></td>
            <td><code>.text-left</code></td>
          </tr>
          <tr>
            <td><p className="text-right">right text.</p></td>
            <td><code>.text-right</code></td>
          </tr>
          <tr>
            <td><p className="text-center">center text.</p></td>
            <td><code>.text-center</code></td>
          </tr>
          <tr>
            <td>
              <p className="text-justify">justify text.</p>
              <p className="text-justify text-muted small" style={{ maxWidth: '20rem' }}>
                At the edge of forever tendrils of gossamer clouds corpus callosum culture
                Vangelis dispassionate extraterrestrial observer.
              </p>
            </td>
            <td><code>.text-justify</code></td>
          </tr>
          <tr>
            <td><p className="text-wrap">wrap text.</p></td>
            <td><code>.text-wrap</code></td>
          </tr>
          <tr>
            <td><p className="text-nowrap">nowrap text.</p></td>
            <td><code>.text-nowrap</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
