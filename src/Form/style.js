/* eslint-disable import/prefer-default-export */
export const formControlSetStyle = () => ({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& > * + *': {
      margin: '.75rem 0 0',
    },
  },
  inline: {
    flexDirection: 'row',
    flexWrap: 1,
    alignItems: 'flex-start',
    '& > * + *': {
      margin: '0 0 0 .5em',
    },
  },
});

export const formTextStyle = (theme) => {
  const style = {
    base: {
      fontSize: theme.text.fontSize.percent.sm,
      display: 'flex',
      alignItems: 'center',
      '.pgn__icon': {
        height: '1em',
        marginRight: '.25em',
        width: '1em',
        display: 'inline-block',
      },
      '& ~ .pgn__form-text': {
        marginTop: '.25rem',
      },
      '.pgn__form-control-set, .pgn__form-control-decorator-group': {
        marginBottom: '.25rem',
      },
    },
    type: {
      default: { color: theme.text.muted },
      valid: { color: theme.formFeedback.validColor },
      invalid: { color: theme.formFeedback.invalidColor },
      warning: { color: theme.colors.gray900 },
      'criteria-empty': {
        '.pgn__icon': { color: theme.text.muted },
      },
      'criteria-valid': {
        '.pgn__icon': { color: theme.formFeedback.validColor },
      },
      'criteria-invalid': {
        '.pgn__icon': { color: theme.formFeedback.invalidColor },
      },
    },
    muted: {
      color: theme.text.muted,
    },
  };
  return style;
};
