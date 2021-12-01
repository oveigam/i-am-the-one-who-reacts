import { Box, Container } from "@mui/material";
import Header from './Header';

const PageLayout = ({ children }) => {
    return (
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
            <Header />
            <Container sx={{ paddingY: 2 }}>
                {children}
            </Container>
        </Box>
    )
}

export default PageLayout;