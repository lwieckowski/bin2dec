import FunctionsIcon from "@mui/icons-material/Functions";
import { Avatar, Typography, Box } from "@mui/material";
import { useState } from "react";
import { InputField } from "./InputField";
import { OutputField } from "./OutputField";

function Converter({ converter }) {
  const [input, setInput] = useState("");
  const isValidInput = converter.isValidInput(input);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 0, bgcolor: "primary.main" }}>
        <FunctionsIcon />
      </Avatar>
      <Typography sx={{ m: 1, textTransform: "capitalize"}} component="h1" variant="h5">
        Convert {converter.from} to {converter.to}
      </Typography>
      <InputField
        label={`${converter.from} number`}
        value={input}
        onChange={handleChange}
        error={!isValidInput}
        helperText={`Not a ${converter.from} number`}
      />
      <OutputField
        label="Result"
        value={input !== "" && isValidInput ? converter.convert(input) : ""}
        disabled={true}
      />
    </Box>
  );
}

export default Converter;
