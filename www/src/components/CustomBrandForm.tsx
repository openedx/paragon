import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, IconButton, Stack } from '~paragon-react';
import { Close } from '~paragon-icons';

function isValidCssUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol.startsWith('http') && u.pathname.endsWith('.css');
  } catch {
    return false;
  }
}

export default function CustomBrandForm({ initialBrand, onSave }) {
  const [brandName, setBrandName] = useState(initialBrand?.name || '');
  const [urls, setUrls] = useState(initialBrand?.urls || ['']);
  const [touched, setTouched] = useState({ name: false, urls: [false] });
  const brandNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (brandNameInputRef.current) {
      brandNameInputRef.current.focus();
    }
  }, []);

  const handleUrlChange = (idx, value) => {
    setUrls(urls.map((u, i) => (i === idx ? value : u)));
    setTouched(t => ({ ...t, urls: t.urls.map((v, i) => (i === idx ? true : v)) }));
  };

  const handleAddUrl = () => {
    setUrls([...urls, '']);
    setTouched(t => ({ ...t, urls: [...t.urls, false] }));
  };

  const handleRemoveUrl = idx => {
    setUrls(urls.filter((_, i) => i !== idx));
    setTouched(t => ({ ...t, urls: t.urls.filter((_, i) => i !== idx) }));
  };

  const validate = () => {
    const nameValid = brandName.trim().length > 0;
    const urlsValid = urls.length > 0 && urls.every(isValidCssUrl);
    return { nameValid, urlsValid };
  };

  const { nameValid, urlsValid } = validate();
  const canSubmit = nameValid && urlsValid;

  const handleSubmit = e => {
    e.preventDefault();
    setTouched({ name: true, urls: urls.map(() => true) });
    if (!canSubmit) return;
    onSave({ name: brandName.trim(), urls: urls.map(u => u.trim()) });
  };

  return (
    <Form id="customBrandForm" onSubmit={handleSubmit}>
      <Form.Group controlId="customBrandName" isInvalid={touched.name && !nameValid}>
        <Form.Label>Brand Name</Form.Label>
        <Form.Control
          size="sm"
          value={brandName}
          onChange={e => setBrandName(e.target.value)}
          onBlur={() => setTouched(t => ({ ...t, name: true }))}
          required
          ref={brandNameInputRef}
        />
        {touched.name && !nameValid && (
          <Form.Control.Feedback type="invalid">
            Brand name is required.
          </Form.Control.Feedback>
        )}
      </Form.Group>
      {urls.map((url, idx) => (
        <Form.Group
          key={idx}
          controlId={`customBrandUrl${idx}`}
          isInvalid={touched.urls[idx] && !isValidCssUrl(url)}
        >
          {idx === 0 && (
            <Form.Label>CSS URL</Form.Label>
          )}
          <Stack direction="horizontal" gap={1}>
            <Form.Control
              size="sm"
              type="url"
              value={url}
              placeholder="https://cdn.example.com/theme.css"
              onChange={e => handleUrlChange(idx, e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, urls: t.urls.map((v, i) => (i === idx ? true : v)) }))}
              isInvalid={touched.urls[idx] && !isValidCssUrl(url)}
              required
              aria-label={idx === 0 ? undefined : 'Additional CSS URL'}
            />
            {urls.length > 1 && (
              <IconButton
                variant="danger"
                src={Close}
                onClick={() => handleRemoveUrl(idx)}
                alt="Remove URL"
                size="inline"
              />
            )}
          </Stack>
          {touched.urls[idx] && !isValidCssUrl(url) && (
            <Form.Control.Feedback type="invalid">
              Please enter a valid CSS URL (must start with http(s) and end with .css).
            </Form.Control.Feedback>
          )}
        </Form.Group>
      ))}
      <Button variant="link" size="sm" className="mt-1 p-0" onClick={handleAddUrl} type="button">
        + Add another URL
      </Button>
    </Form>
  );
}

CustomBrandForm.propTypes = {
  initialBrand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onSave: PropTypes.func.isRequired,
};

CustomBrandForm.defaultProps = {
  initialBrand: undefined,
}; 