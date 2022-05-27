import React, { createContext } from 'react'
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const TemplateContext = createContext(null);

 const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: 'unset'
        }
      },
      MuiDialogContent: {
        root: {
          '&:first-child': {
            padding: 0,
            paddingTop:0
          }
        }
      },
      MuiTableCell:{
        root:{
          borderBottom:'none'
        }
      },

    }
  })

return (
  <TemplateContext.Provider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </TemplateContext.Provider>
)
}

export default TemplateProvider
