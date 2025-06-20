import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
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

interface FormData {
  name: string;
  urls: { url: string }[];
}

function isValidCssUrl(url: string) {
  try {
    const u = new URL(url);
    return u.protocol.startsWith('http') && u.pathname.endsWith('.css');
  } catch {
    return false;
  }
}

const CustomThemesForm = forwardRef<CustomThemesFormRef, CustomThemesFormProps>(({ initialTheme, onSave }, ref) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      name: initialTheme?.name || '',
      urls: initialTheme?.urls.length ? initialTheme.urls.map(url => ({ url })) : [{ url: '' }],
    },
    mode: 'onTouched',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'urls',
  });

  const urlInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const prevUrlsLength = useRef(fields.length);

  useEffect(() => {
    if (fields.length > prevUrlsLength.current) {
      urlInputRefs.current[fields.length - 1]?.focus();
    }
    prevUrlsLength.current = fields.length;
  }, [fields.length]);

  const onSubmit = (data: FormData) => {
    onSave({
      name: data.name.trim(),
      urls: data.urls.map(u => u.url.trim()).filter(url => url.length > 0),
    });
  };

  const submitForm = async () => {
    const isValid = await trigger();
    if (isValid) {
      const data = getValues();
      onSubmit(data);
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  const handleAddUrl = () => {
    append({ url: '' });
  };

  const handleRemoveUrl = (index: number) => {
    remove(index);
  };

  return (
    <Form id="customThemesForm" onSubmit={handleSubmit(onSubmit)}>
      <Form.Text className="mb-3">
        Add a custom theme name and one or more CSS URLs to apply your own theme. The CSS files should be
        accessible via URLs and must end with <code>.css</code>.
      </Form.Text>
      <Form.Group controlId="customThemeName" isInvalid={!!errors.name}>
        <Form.Label>Theme Name</Form.Label>
        <Form.Control
          size="sm"
          {...register('name', {
            required: 'Theme name is required.',
            validate: (value) => value.trim().length > 0 || 'Theme name is required.',
          })}
        />
        {errors.name && (
          <Form.Control.Feedback type="invalid">
            {errors.name.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <div role="group" aria-label="CSS URL(s)">
        <Form.Label  onClick={() => urlInputRefs.current[0]?.focus()}>
          CSS URL(s)
        </Form.Label>
        <div>
          {fields.map((field, idx) => (
            <Form.Group
              key={field.id}
              controlId={`customThemeUrl${idx}`}
              isInvalid={!!errors.urls?.[idx]}
            >
              <Stack direction="horizontal" gap={1}>
                <Controller
                  name={`urls.${idx}.url`}
                  control={control}
                  rules={{
                    required: 'CSS URL is required.',
                    validate: (value) => {
                      if (!value || value.trim().length === 0) {
                        return 'CSS URL is required?!';
                      }
                      if (!isValidCssUrl(value.trim())) {
                        return 'Please enter a valid CSS URL (must start with http(s) and end with .css).';
                      }
                      return true;
                    },
                  }}
                  render={({ field: formField }) => (
                    <Form.Control
                      size="sm"
                      type="url"
                      placeholder="https://cdn.example.com/theme.css"
                      aria-label="CSS URL"
                      {...formField}
                      ref={el => {
                        urlInputRefs.current[idx] = el;
                      }}
                    />
                  )}
                />
                {fields.length > 1 && (
                  <IconButton
                    variant="danger"
                    src={Close}
                    onClick={() => handleRemoveUrl(idx)}
                    alt="Remove URL"
                    size="inline"
                  />
                )}
              </Stack>
              {errors.urls?.[idx] && (
                <Form.Control.Feedback type="invalid">
                  {errors.urls[idx]?.url?.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
          ))}
        </div>
      </div>
      <Button
        variant="tertiary"
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
