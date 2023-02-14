import FunctionsIcon from "@mui/icons-material/Functions";
import { Avatar, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";

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
      <TextField
        sx={{textTransform: "capitalize"}}
        fullWidth
        error={!isValidInput}
        helperText={!isValidInput && `Not a ${converter.from} number`}
        margin="dense"
        id="outlined-basic"
        label={`${converter.from} number`}
        variant="outlined"
        value={input}
        onChange={handleChange}
      />
      <TextField
        sx={{textTransform: "capitalize"}}
        fullWidth
        disabled
        margin="dense"
        id="filled-disabled"
        label="Result"
        variant="filled"
        value={input !== "" && isValidInput ? converter.convert(input) : ""}
      />
    </Box>
  );
}

export default Converter;
