import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TextWithLabel = ({ label, children }) => {
    const { t } = useTranslation()
    return (
        <Stack direction="row" spacing={1}>
            <Typography fontWeight="bold" >{t(label)}:</Typography>
            <Typography color="text.secondary" >{children}</Typography>
        </Stack>
    );
}

export default TextWithLabel;