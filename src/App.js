import "./App.css";
import { Layout } from "./components/Layout";
import binaryToDecimal from "./services/converters";
import Converter from "./components/Converter";

function App() {
  return (
    <Layout>
      <Converter converter={binaryToDecimal} />
    </Layout>
  );
}

export default App;
