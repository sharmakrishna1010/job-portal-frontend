import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme({
  colors: {

    'pictonBlue': [
      '#f1f8fe',
      '#e2f0fc',
      '#bee1f9',
      '#84c9f5',
      '#59b7f0',
      '#1993de',
      '#0c74bd',
      '#0b5d99',
      '#0e4f7e',
      '#114269',
      '#0b2a46',
    ],

    'black': [
      '#fafafa',
      '#f5f5f5',
      '#e6e6e6',
      '#d6d6d6',
      '#a5a5a5',
      '#767676',
      '#575757',
      '#434343',
      '#292929',
      '#1a1a1a',
      '#000000',
    ]

  },

})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
)
