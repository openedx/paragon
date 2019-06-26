import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { ComponentStatus } from '../../components/doc-elements';
import { Table } from '~paragon-react';
import SEO from '../../components/seo';
import CSSUtilitiesTable from '../../components/CSSUtilitiesTable';
import MeasuredItem from '../../components/MeasuredItem';
import getCssSelectors from '../../utils/getCssSelectors.js';
import CodeBlock from '../../components/CodeBlock';

const renderMeasurements = (measurements) => {
  return (
    <p>
      {Object.entries(measurements).map(([k, v]) => {
        return (
          <span>
            <span>{k.replace('-', ' ').toUpperCase()}:</span>
            <span>{v}</span>
          </span>
        )
      })}
    </p>
  );
};

const weightLabels = {
  '200': 'Light',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Medium',
  '700': 'Bold',
  '800': 'Black',
};

const measuredTypeProps = {
  properties: ['font-size', 'line-height', 'font-family', 'font-weight'],
  renderAfter: measurements => {

    const fontFamily = measurements['font-family'] ?
      measurements['font-family'].split(',')[0] : null;

    const weight = weightLabels[measurements['font-weight']];

    return (
      <p className="m-0 text-muted">
        <span className="mr-2">
          {fontFamily} {weight}
        </span>
        {measurements['font-size']} / {measurements['line-height']}
      </p>
    );
  },
}

export default function(props) {
  return (
    <div>

      <h1>Typography</h1>





      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colspan="3">
              <h2>Headings</h2>
              <p className="font-weight-normal">Headings all share a line-height of 1.25em</p>
            </th>
          </tr>
          <tr>
            <th>Desktop</th>
            <th>Mobile</th>
            <th>CSS Class</th>
          </tr>
          {[1,2,3,4,5,6].map(headingSize => (
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
            <th colspan="3">
              <h2>Body</h2>
              <p className="font-weight-normal">Body text line-heights are 1.5em</p>
            </th>
          </tr>
          <tr>
            <th colspan="2">Desktop & Mobile</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="lead m-0">Large Body</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.lead</code>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="m-0">Body</p>
              </MeasuredItem>
            </td>
            <td>

            </td>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="small m-0">Small Body</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.small</code>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th colspan="3">
              <h2>Forms</h2>
              <p className="font-weight-normal">Form text line-heights are the same as headings: 1.25em.</p>
            </th>
          </tr>
          <tr>
            <th colspan="2">Desktop & Mobile</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <label className="m-0">Label</label>
              </MeasuredItem>
            </td>
            <td>
              <small>Same as h6</small>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="m-0">Helper</p>
              </MeasuredItem>
            </td>
            <td>
              <small>Same as body</small>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <MeasuredItem {...measuredTypeProps}>
                <p className="small m-0">Helper Small</p>
              </MeasuredItem>
            </td>
            <td>
              <code>.small</code><br/>
              <small>Same as small body</small>
            </td>
          </tr>
        </tbody>
      </table>


      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colspan="2">
              <h2>Decoration and Emphasis</h2>
            </th>
          </tr>
          <tr>
            <th>Style</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td><p class="text-lowercase">Lowercase text.</p></td>
            <td><code>.text-lowercase</code></td>
          </tr>
          <tr>
            <td><p class="text-uppercase">uppercase text.</p></td>
            <td><code>.text-uppercase</code></td>
          </tr>
          <tr>
            <td><p class="text-capitalize">capitalize text.</p></td>
            <td><code>.text-capitalize</code></td>
          </tr>
          <tr>
            <td><p class="text-decoration-none">No decorations.</p></td>
            <td><code>.text-decoration-none</code></td>
          </tr>

          <tr>
            <td><p class="text-italic">Italic text.</p></td>
            <td><code>.text-italic</code></td>
          </tr>

          <tr>
            <td><p class="font-weight-bold">Bold text.</p></td>
            <td><code>.font-weight-bold</code></td>
          </tr>
          <tr>
            <td><p class="font-weight-normal">Regular text.</p></td>
            <td><code>.font-weight-normal</code></td>
          </tr>
        </tbody>
      </table>

      <table className="w-100 table pgn-doc__status-table">
        <tbody>
          <tr>
            <th colspan="2">
              <h2>Alignment</h2>
            </th>
          </tr>
          <tr>
            <th>Style</th>
            <th>CSS Class</th>
          </tr>
          <tr>
            <td><p class="text-left">left text.</p></td>
            <td><code>.text-left</code></td>
          </tr>
          <tr>
            <td><p class="text-right">right text.</p></td>
            <td><code>.text-right</code></td>
          </tr>
          <tr>
            <td><p class="text-center">center text.</p></td>
            <td><code>.text-center</code></td>
          </tr>
          <tr>
            <td>
              <p class="text-justify">justify text.</p>
              <p className="text-justify text-muted small" style={{maxWidth:'20rem'}}>
                At the edge of forever tendrils of gossamer clouds corpus callosum culture Vangelis dispassionate extraterrestrial observer.
              </p>
            </td>
            <td><code>.text-justify</code></td>
          </tr>
          <tr>
            <td><p class="text-wrap">wrap text.</p></td>
            <td><code>.text-wrap</code></td>
          </tr>
          <tr>
            <td><p class="text-nowrap">nowrap text.</p></td>
            <td><code>.text-nowrap</code></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
