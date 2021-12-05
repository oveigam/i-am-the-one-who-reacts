import { ErrorOutline, Refresh } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const error = useSelector(state => state.error.error)

    return (
        <Paper sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Stack spacing={4}>
                <ErrorOutline color="error" fontSize="large" />
                <Typography variant="h2" color="error.main" >{t('wentwrong')}</Typography>
                <Typography color="error.light" fontSize={22} >{t(error)}</Typography>
                <Box display="flex" justifyContent="flex-end" >
                    <Button
                        color="error"
                        size="large"
                        endIcon={<Refresh />}
                        onClick={() => navigate(0)}
                    >
                        {t('reload')}
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
}

export default ErrorPage;