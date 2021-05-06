const getStyle = (theme) => {
  // Define alert colors, border radius, and padding.
  const vars = {
    paddingY: '1.5rem',
    paddingX: '1.5rem',
    marginBottom: '1rem',
    borderRadius: theme.component.border.radius,
    link: {
      fontWeight: theme.text.fontWeight.normal,
    },
    borderWidth: 0,
    titleColor: theme.colors.primary500,
    boxShadow: (
      '0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.15)'
    ),
    bgLevel: -10,
    borderLevel: -9,
    colorLevel: 6,
    iconSpace: '.8rem',
  };

  const validRadius = (radius) => {
    const output = [];
    const validValue = (value) => {
      if (!Number.isNaN(value)) {
        return Math.max(value, 0);
      }
      return value;
    };

    if (Array.isArray(radius)) {
      radius.forEach((value) => {
        output.push(validValue(value));
      });
    } else {
      output.push(validValue(radius));
    }
    return { borderRadius: output };
  };

  // Override Bootstrap's alert definition.
  // We do this to get more control over colors
  // used in alerts.
  const alert = {
    position: 'relative',
    padding: `${vars.paddingY} ${vars.paddingX}`,
    marginBottom: vars.marginBottom,
    border: `${vars.borderWidth} solid transparent`,
    ...validRadius(vars.borderRadius),
    boxShadow: vars.boxShadow,
    '& > :last-child': {
      marginBottom: 0,
    },
    '.alert-icon': {
      float: 'left',
      marginRight: vars.iconSpace,
      width: '1.25rem',
      height: '1.25rem',
    },
  };

  // Headings for larger alerts
  const alertHeading = {
    // Specified to prevent conflicts of changing $headings-color
    color: vars.titleColor,
    display: 'flex',
  };

  // Dismissible alerts
  //
  // Expand the right padding and account for the close button's positioning.
  const alertDismissible = {
    paddingRight: `(${theme.text.fontSize.base} * 1.5) + ${vars.paddingX} * 2`,
    // Adjust close link position
    '.close': {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: `${vars.paddingY} ${vars.paddingX}`,
      color: 'inherit',
    },
  };

  const alertLink = {
    fontWeight: vars.link.fontWeight,
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  };

  // Alternate styles
  //
  // Generate contextual modifier classes for coloring the alert.
  const alertColor = (color) => ({
    color: 'inherit',
    backgroundColor: theme.getThemeColor(color, 'background', theme),
    borderColor: theme.getThemeColor(color, 'border', theme),
    '.alert-icon': {
      color: theme.getThemeColor(color, 'default', theme),
    },
  });

  const fade = {
    '&:not(.show)': {
      display: 'none',
    },
    transition: 'opacity .15s linear',
  };

  return {
    alert,
    alertColor,
    alertDismissible,
    alertHeading,
    alertLink,
    fade,
  };
};

export default getStyle;
