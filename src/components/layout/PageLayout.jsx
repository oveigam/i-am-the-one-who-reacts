import { Box, Container } from "@mui/material";
import Header from './Header';

const PageLayout = ({ children }) => {
    return (
        <Box sx={{
            bgcolor: 'secondary.main',
            color: 'text.primary',
            minHeight: '100vh',
            backgroundImage: { lg: `url(${window.location.origin}/images/pinkman.png)` },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundAttachment: 'fixed',
            backgroundSize: 'auto 100%'
        }} >
            <Box sx={{
                minHeight: '100vh',
                backgroundImage: { lg: `url(${window.location.origin}/images/walter.png)` },
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundAttachment: 'fixed',
                backgroundSize: 'auto 100%',
                display: 'flex',
                flexDirection: 'column'
            }} >
                <Header />
                <Container sx={{ paddingY: 1.5, flex: 1, display: 'flex' }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}

export default PageLayout;