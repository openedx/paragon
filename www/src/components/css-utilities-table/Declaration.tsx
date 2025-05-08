import React from 'react';
import PropTypes from 'prop-types';
import { colorCSSDeclaration, containsCSSVariable } from './utils';

export default function CSSDeclaration({ declaration, handleMouseEnter, handleMouseLeave }: DeclarationData) {
  const [attribute, value, importantFlag] = declaration.split(/:|!/);

  if (containsCSSVariable(value)) {
    return (
      <code style={{ fontSize: '14px' }} key={declaration} className="mb-0 text-muted">
        <span>{attribute}: </span>
        <span
          onMouseEnter={(e: React.MouseEvent) => handleMouseEnter(e, declaration)}
          onMouseLeave={() => handleMouseLeave()}
          style={{ cursor: 'pointer', textDecoration: 'underline dotted' }}
        >
          {colorCSSDeclaration(value.trim())}
        </span>
        {importantFlag && <span> !important;</span>}
      </code>
    );
  }

  return (
    <code style={{ fontSize: '14px' }} key={declaration} className="mb-0 text-muted">
      {colorCSSDeclaration(declaration)}
    </code>
  );
}

interface DeclarationData {
  declaration: string,
  handleMouseEnter: (e: React.MouseEvent, declaration: string) => void,
  handleMouseLeave: () => void,
}

CSSDeclaration.propTypes = {
  declaration: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};
