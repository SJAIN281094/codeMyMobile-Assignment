const fn = (state, action) => {
  switch (action.type) {
    case 'ALERT_OPEN':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: action.severity,
          label: action.label,
        },
      };
    case 'ALERT_CLOSE':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: state.alert.severity,
          label: state.alert.label,
        },
      };
    default:
      return state;
  }
};

export default fn;
