import { renderToStaticMarkup } from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';

const getTextFromElement = element => sanitizeHtml(
  renderToStaticMarkup(element),
  {
    allowedTags: [],
    allowedAttributes: [],
  },
);

export default getTextFromElement;
