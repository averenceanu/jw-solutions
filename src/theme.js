import { createTheme } from "@mui/material/styles";


const theme = (mode) => createTheme ({
  palette: {
    primary: {
      main: '#22346a',
    },
    secondary: {
      main: '#f2b891',
    },
    info: {
      main: '#e3e2cb',
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: 'Exo 2',
    fontWeightRegular: 400,
    fontWeightLight: 400,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color: 'secondary',
          margin: 5,
          disableElevation: 'true',
          padding: 10,
        }
      }
    }
  },
})

export default theme;


