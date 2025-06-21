import React from 'react';
import {
  Button,
  Stack,
  Form,
} from '~paragon-react';
import { Plus } from '~paragon-icons';
import { type Theme } from '../types/types';
import { hasUrls } from '../utils/themeUtils';

interface EditPanelProps {
  themes: Theme[];
  currentThemeValue: string;
  onThemeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditTheme: (themeIndex: number) => void;
  hasCustomThemes: boolean;
  onResetClick: () => void;
  onAddClick: () => void;
  radioRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  addButtonRef?: React.RefObject<HTMLButtonElement>;
}

const EditPanel: React.FC<EditPanelProps> = ({
  themes,
  currentThemeValue,
  onThemeChange,
  onEditTheme,
  hasCustomThemes,
  onResetClick,
  onAddClick,
  radioRefs,
  addButtonRef,
}) => (
  <Stack gap={3} className="mt-2">
    <Form.RadioSet
      name="theme"
      value={currentThemeValue}
      onChange={onThemeChange}
      ref={radioRefs}
    >
      {themes.map((theme, index) => {
        const isCustom = hasUrls(theme);
        return (
          <div key={theme.name}>
            <Form.Radio
              value={index.toString()}
              ref={(el) => {
                radioRefs.current[index] = el;
              }}
            >
              <Stack gap={1}>
                <span>{theme.name}</span>
                {isCustom && (
                  <div>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onEditTheme(index);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                )}
              </Stack>
            </Form.Radio>
          </div>
        );
      })}
    </Form.RadioSet>
    <Stack gap={2}>
      <div>
        <Button
          ref={addButtonRef}
          size="sm"
          variant="outline-primary"
          onClick={onAddClick}
          iconBefore={Plus}
          block
        >
          Add custom theme
        </Button>
      </div>
      <div>
        {hasCustomThemes && (
          <Button
            size="sm"
            variant="outline-danger"
            onClick={onResetClick}
            block
          >
            Reset custom themes
          </Button>
        )}
      </div>
    </Stack>
  </Stack>
);

export default EditPanel;
