import styles from './exampleForm.module.css';

interface RadioInput {
  name: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}

interface SwitchInput {
  name: string;
  value: boolean;
  setValue: (value: boolean) => void;
  options?: undefined;
}

export type ExampleInput = RadioInput | SwitchInput;

export interface ExamplePropsFormProps {
  inputs: ExampleInput[];
}

/**
 * A tiny props panel for live docs examples — a dependency-free stand-in for the
 * `ExamplePropsForm` used by Paragon's current Gatsby docs (which is built from
 * the `Form` components). Each input is either a radio set (`options`) or a
 * boolean switch, driven by the example's own `useState`.
 */
export function ExamplePropsForm({ inputs }: ExamplePropsFormProps) {
  return (
    <div className={styles.form}>
      <h4 className={styles.heading}>Props panel</h4>
      {inputs.map((input) => {
        if (input.options) {
          return (
            <fieldset key={input.name} className={styles.group}>
              <legend className={styles.badge}>{input.name}</legend>
              <div className={styles.radioRow}>
                {input.options.map((option) => (
                  <label key={option} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name={input.name}
                      value={option}
                      checked={input.value === option}
                      onChange={(e) => input.setValue(e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          );
        }
        return (
          <label key={input.name} className={styles.switchLabel}>
            <input
              type="checkbox"
              checked={input.value}
              onChange={(e) => input.setValue(e.target.checked)}
            />
            <span className={styles.badge}>
              {input.name}: {(!!input.value).toString()}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default ExamplePropsForm;
