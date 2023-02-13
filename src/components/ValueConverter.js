import { TextField, Avatar, Typography } from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import { Box } from "@mui/system";
import { useState } from "react";

const STYLE = {
  box: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    m: 0,
    bgcolor: "primary.main",
  },
  title: {
    m: 1,
  },
};

function Converter({ converter }) {
  const [input, setInput] = useState("");
  const isValidInput = converter.isValidInput(input);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box sx={STYLE.box}>
      <Avatar sx={STYLE.avatar}>
        <FunctionsIcon />
      </Avatar>
      <Typography sx={STYLE.title} component="h1" variant="h5">
        Convert {converter.from} to {converter.to}
      </Typography>
      <TextField
        fullWidth
        error={!isValidInput}
        helperText={!isValidInput && "Not a binary number"}
        margin="dense"
        id="outlined-basic"
        label="Binary number"
        variant="outlined"
        value={input}
        onChange={handleChange}
      />
      <TextField
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
