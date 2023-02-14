import { Container, CssBaseline } from "@mui/material";

function Layout({ children }) {
  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />
      {children}
    </Container>
  );
}

export { Layout };
