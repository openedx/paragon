import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  Form,
  Button,
  IconButton,
  Stack,
} from '~paragon-react';
import { Close, Plus } from '~paragon-icons';

interface CustomThemesFormProps {
  initialTheme: {
    name: string;
    urls: string[];
  } | null;
  onSave: (theme: { name: string; urls: string[] }) => void;
}

export interface CustomThemesFormRef {
  submitForm: () => void;
}

function isValidCssUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol.startsWith('http') && u.pathname.endsWith('.css');
  } catch {
    return false;
  }
}

const CustomThemesForm = forwardRef<CustomThemesFormRef, CustomThemesFormProps>(({ initialTheme, onSave }, ref) => {
  const [themeName, setThemeName] = useState(initialTheme?.name || '');
  const [urls, setUrls] = useState(initialTheme?.urls || ['']);
  const [touched, setTouched] = useState({ name: false, urls: [false] });
  const urlInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const prevUrlsLength = useRef(urls.length);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (urls.length > prevUrlsLength.current) {
      urlInputRefs.current[urls.length - 1]?.focus();
    }
    prevUrlsLength.current = urls.length;
  }, [urls.length]);

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
    const nameValid = themeName.trim().length > 0;
    const urlsValid = urls.length > 0 && urls.every(isValidCssUrl);
    return { nameValid, urlsValid };
  };

  const { nameValid, urlsValid } = validate();
  const canSubmit = nameValid && urlsValid;

  const handleSubmit = e => {
    e.preventDefault();
    setTouched({ name: true, urls: urls.map(() => true) });
    if (!canSubmit) { return; }
    onSave({ name: themeName.trim(), urls: urls.map(u => u.trim()) });
  };

  const submitForm = () => {
    setTouched({ name: true, urls: urls.map(() => true) });
    if (!canSubmit) { return; }
    onSave({ name: themeName.trim(), urls: urls.map(u => u.trim()) });
  };

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  return (
    <Form id="customThemesForm" onSubmit={handleSubmit} ref={formRef}>
      <Form.Text className="mb-3">
        Add a custom theme name and one or more CSS URLs to apply your own theme. The CSS files should be
        accessible via URLs and must end with <code>.css</code>.
      </Form.Text>
      <Form.Group controlId="customThemeName" isInvalid={touched.name && !nameValid}>
        <Form.Label>Theme Name</Form.Label>
        <Form.Control
          size="sm"
          value={themeName}
          onChange={e => setThemeName(e.target.value)}
          onBlur={() => setTouched(t => ({ ...t, name: true }))}
          required
        />
        {touched.name && !nameValid && (
          <Form.Control.Feedback type="invalid">
            Theme name is required.
          </Form.Control.Feedback>
        )}
      </Form.Group>
      {urls.map((url, idx) => (
        <Form.Group
          key={url}
          controlId={`customThemeUrl${idx}`}
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
              required
              aria-label={idx === 0 ? undefined : 'Additional CSS URL'}
              ref={el => {
                urlInputRefs.current[idx] = el;
              }}
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
      <Button
        variant="link"
        size="sm"
        onClick={handleAddUrl}
        iconBefore={Plus}
      >
        Add another URL
      </Button>
    </Form>
  );
});

CustomThemesForm.displayName = 'CustomThemesForm';

export default CustomThemesForm;
