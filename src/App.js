import "./App.css";
import StyledContainer from "./containers/StyledContainer";
import ValueConverter from "./components/ValueConverter";

function App() {

  const from = "binary";
  const to = "decimal";

  const convert = (value) => value == "" ? "" : value * 2;

  return (
      <StyledContainer>
        <ValueConverter from={from} to={to} convert={convert}/>
      </StyledContainer>
  );
}

export default App;
