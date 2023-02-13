import "./App.css";
import StyledContainer from "./containers/StyledContainer";
import ValueConverter from "./components/ValueConverter";
import binaryToDecimal from "./services/Conversion";

function App() {
  return (
    <StyledContainer>
      <ValueConverter converter={binaryToDecimal} />
    </StyledContainer>
  );
}

export default App;
