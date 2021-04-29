---
title: 'ParagonProvider'
type: 'component'
components:
- ParagonProvider
- ParagonContext
categories:
- Theming
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Use the `ParagonProvider` at the root of a React app to set the Paragon CSS-in-JS theme and locale.

```jsx
import theme from '@edx/brand/paragon/theme';

ReactDOM.render(
  <ParagonProvider theme={theme} locale="en-us">
    ...
  </ParagonProvider>
);
```


### Using the ParagonContext

The ParagonContext contains the locale and any extra props added to the `ParagonProvider` will be available in the `ParagonContext`. It does not include the theme.

##### See emotion docs for consuming a theme.

The ParagonProvider also renders a `ThemeProvider` for use with emotion, the CSS-in-JS library used for styling in Paragon. For use in applications Paragon passes through the following objects from emotion: `ThemeProvider`, `useTheme`, and `withTheme`. See emotion's docs for usage: https://emotion.sh/docs/theming

```jsx live
() => {
  const Consumer = () => {
    const context = useParagonContext(ParagonContext);
    const themeContext = useTheme();
    return (
      <div className="border p-3 rounded small">
        <h4>ParagonContext</h4>
        <pre>{JSON.stringify(context, null, 4)}</pre>
        <h4>ThemeContext</h4>
        <pre>{JSON.stringify(themeContext, null, 4)}</pre>
      </div>
    );
  }

  return (
    <ParagonProvider
      theme={{ themeKey: 'themeValue' }}
      locale="es-us"
      customProp="custom"
    >
      <Consumer />
    </ParagonProvider>
  )
}
```

------

### useParagonContext

`useParagonContext` is a hook that consumes a `ParagonContext`.

```jsx
const context = useParagonContext();
```

### ParagonContext

`ParagonContext` is the underlying React context rendered by ParagonProvider.

```jsx
class MyComponent extends React.Component {
  // Assign a contextType to read the current theme context.
  static contextType = ParagonContext;

  render() {
    return <pre>{JSON.stringify(this.context, null, 4)}</pre>;
  }
}
```
