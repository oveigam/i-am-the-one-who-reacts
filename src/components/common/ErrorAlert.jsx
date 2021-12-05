import { Close } from "@mui/icons-material";
import { Alert, AlertTitle, Button, IconButton, Slide, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const ErrorAlert = ({ onClose, error, onRetry }) => {
    const { t } = useTranslation()

    return (
        <Slide direction="down" in={!!error} mountOnEnter unmountOnExit >
            <Alert
                sx={{
                    position: 'fixed',
                    zIndex: 99,
                    top: 25,
                    right: '30vw',
                    width: '40vw',
                }}
                variant="filled"
                color="error"
                severity="error"
                action={
                    <Stack spacing={2} direction="row">
                        <Button color="inherit" size="small" onClick={onRetry}>
                            {t('retry')}
                        </Button>
                        <IconButton color="inherit" size="small" onClick={onClose}>
                            <Close />
                        </IconButton>
                    </Stack>
                }
            >
                <AlertTitle>{t('error')}</AlertTitle>
                {t(error)}
            </Alert>
        </Slide>
    );
}

export default ErrorAlert;