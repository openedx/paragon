import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import {
  Form,
  Button,
  IconButton,
  Stack,
} from '~paragon-react';
import { Close, Plus } from '~paragon-icons';
import { type Theme, type ThemeFormState } from '../types/types';
import { generateCustomThemeName, isThemeNameAvailable, createNewTheme } from '../utils/themeUtils';
import { useThemeForm } from '../context/ThemeFormContext';

interface FormData {
  name: string;
  urls: { url: string }[];
}

function isValidCssUrl(url: string) {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol.startsWith('http') && url.endsWith('.css');
  } catch {
    return false;
  }
}

export interface CustomThemesFormRef {
  submitForm: () => void;
}

interface CustomThemesFormProps {
  initialTheme: Theme | null;
  onFormStateChange?: (state: ThemeFormState) => void;
}

const CustomThemesForm = forwardRef<CustomThemesFormRef, CustomThemesFormProps>(
  ({ initialTheme, onFormStateChange }, ref) => {
    const { existingThemes, onSaveTheme } = useThemeForm();

    const {
      register,
      handleSubmit,
      control,
      watch,
      formState: { errors, isValid: formIsValid },
      trigger,
      getValues,
      clearErrors,
    } = useForm<FormData>({
      defaultValues: {
        name: initialTheme?.name || '',
        urls: initialTheme?.urls?.length
          ? initialTheme.urls.map(url => ({ url }))
          : [{ url: '' }],
      },
      mode: 'onTouched',
      delayError: 300,
    });

    const { fields, append, remove } = useFieldArray({
      control,
      name: 'urls',
    });

    // Watch URL values to check for blank inputs
    const watchedUrls = watch('urls');
    const hasBlankUrl = watchedUrls?.some(urlField => !urlField.url?.trim());

    const urlInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const prevUrlsLength = useRef(fields.length);

    // Notify parent of form validation state changes
    useEffect(() => {
      onFormStateChange?.({ isValid: formIsValid });
    }, [formIsValid, onFormStateChange]);

    useEffect(() => {
      if (fields.length > prevUrlsLength.current) {
        urlInputRefs.current[fields.length - 1]?.focus();
      }
      prevUrlsLength.current = fields.length;
    }, [fields.length]);

    const onSubmit = (data: FormData) => {
      const trimmedName = data.name.trim();
      const urls = data.urls.map(u => u.url.trim()).filter(url => url.length > 0);

      const themeConfig = createNewTheme(existingThemes, trimmedName || undefined, urls);
      onSaveTheme(themeConfig);
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
      const newIndex = fields.length;
      append({ url: '' });
      // Clear validation errors only for the newly added field
      clearErrors(`urls.${newIndex}.url`);
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
            placeholder={generateCustomThemeName(existingThemes)}
            {...register('name', {
              validate: (value) => {
                if (!value || value.trim().length === 0) {
                  return undefined; // Allow empty names (will use auto-generated name)
                }

                const trimmedName = value.trim();

                // Check if name is available (excluding current theme being edited)
                if (!isThemeNameAvailable(trimmedName, existingThemes, initialTheme)) {
                  return 'Theme name must be unique.';
                }

                return undefined;
              },
            })}
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <div role="group" aria-label="CSS URL(s)">
          <Form.Label onClick={() => urlInputRefs.current[0]?.focus()}>
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
          variant="outline-primary"
          size="sm"
          onClick={handleAddUrl}
          iconBefore={Plus}
          disabled={hasBlankUrl}
        >
          Add URL
        </Button>
      </Form>
    );
  },
);

CustomThemesForm.displayName = 'CustomThemesForm';

// Add defaultProps for optional props
CustomThemesForm.defaultProps = {
  onFormStateChange: undefined,
};

export default CustomThemesForm;
