import { MantineProvider } from "@mantine/core";
import HomePage from "./component/HomePage";
import '@mantine/core/styles.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
