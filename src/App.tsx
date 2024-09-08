import { MantineProvider } from "@mantine/core";
import HomePage from "./component/HomePage";
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
