import { Container, CssBaseline } from "@mui/material";


function StyledContainer({ children }) {
    return (    
        <Container component="div" maxWidth="xs">
            <CssBaseline />
            {children}
        </Container>
    )
}

export default StyledContainer;