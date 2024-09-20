import { createTheme, MantineProvider } from "@mantine/core";
import HomePage from "./component/HomePage";
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
const theme = createTheme({
  breakpoints:{
    'xxs':'320px',
    'xs':'476px',
    'sm':'640x',
    'md':'787px',
    'bs':'900px',
    'lg':'1025px',
    'lxl':'1180px',
    'xl':'1313px',
    '2xl':'1536px',
    
  },
})
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
