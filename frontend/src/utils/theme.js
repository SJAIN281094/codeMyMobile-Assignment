import { Components } from './material-ui';

const { createMuiTheme } = Components;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    common: {
      gray90: '#e5e5e5',
      gray98: '#fafafa',
    },
  },
});

export default theme;
