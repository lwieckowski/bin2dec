import "./App.css";
import {
  CssBaseline,
  TextField,
  Container,
  Avatar,
  Typography,
} from "@mui/material";
import FunctionsIcon from "@mui/icons-material/Functions";
import { Box } from "@mui/system";

function App() {
  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
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
        <Typography sx={{ m: 2 }} component="h1" variant="h5">
          Convert binary to decimal
        </Typography>
        <TextField
          fullWidth
          margin="dense"
          id="outlined-basic"
          label="Binary number"
          variant="outlined"
        />
        <TextField
          fullWidth
          disabled
          margin="dense"
          id="filled-disabled"
          label="Result"
          variant="filled"
        />
      </Box>
    </Container>
  );
}

export default App;
