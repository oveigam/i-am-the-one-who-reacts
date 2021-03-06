import { AppBar, Stack, Toolbar } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import LanguageSelector from "../common/LanguageSelector";
import ThemeToggle from "../common/ThemeToggle";

const Header = () => {
    const { t } = useTranslation()
    return (
        <AppBar position="relative" elevation={0} sx={{ bgcolor: 'primary.main' }} >
            <Toolbar variant="dense" >
                <Link to="/">
                    <img src="/logo192.png" width="34" alt="logo" title={t('knockknock')} />
                </Link>
                <Stack
                    width="100%"
                    direction="row"
                    spacing={3}
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <ThemeToggle />
                    <LanguageSelector />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header