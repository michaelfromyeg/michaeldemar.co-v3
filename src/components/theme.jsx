import { createMuiTheme } from '@material-ui/core';
import vkreg from './vkreg'
import vkbold from './vkbold'
import vkem from './vkem'
import vkbolem from './vkboldem'
import unica from './unica'

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Vollkorn',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [vkreg],
        },
      },
    },
  });

  export default theme