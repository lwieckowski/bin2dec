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
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
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
        margin="dense"
        id="outlined-basic"
        label="Binary number"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        disabled
        margin="dense"
        id="filled-disabled"
        label="Result"
        variant="filled"
        value={converter.conversionFunction(value)}
      />
    </Box>
  );
}

export default Converter;
