import { useId } from "react";
import { Container, Label, Output } from "./style";

function OutputField(props) {
  const input_id = useId();
  const label_id = useId();

  return (
    <Container>
      <Output
        type="text"
        id={input_id}
        aria-labelledby={label_id}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <Label htmlFor={input_id} id={label_id}>
        {props.label}
      </Label>
    </Container>
  );
}

export { OutputField };
