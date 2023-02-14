import { useId } from "react";
import { Container, Label, Input, Error } from "./style";

function InputField(props) {
  const input_id = useId();
  const label_id = useId();

  return (
    <Container>
      <Input
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
      <Error>{props.error && props.helperText}</Error>
    </Container>
  );
}

export { InputField };
