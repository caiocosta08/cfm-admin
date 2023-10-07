import '../styles/main.scss';
import { AppProps } from 'next/app';
import '../i18n/index'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { storeWrapper } from "../store";

const THEME = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 900,
    h6: {
      "fontWeight": 'bold',
      "fontSize": 16
    }
  },
});
function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />;
    </ThemeProvider>
  </>
}

export default storeWrapper.withRedux(App)