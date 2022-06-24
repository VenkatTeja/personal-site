import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#ffffff',
      light: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      dark: '#ffffff',
      light: '#ffffff'
    },
    type: 'dark'
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp
