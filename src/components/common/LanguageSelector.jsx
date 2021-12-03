import { MenuItem, Select } from "@mui/material";
import i18n from '../../i18n';

const LanguageSelector = () => {
    return (
        <Select
            sx={{ height: 32, bgcolor: 'primary.light' }}
            value={i18n.language.split('-')[0]}
            MenuProps={{ disableScrollLock: true }}
            onChange={e => i18n.changeLanguage(e.target.value)}
        >
            <MenuItem value="es" sx={{ justifyContent: 'center', alignItems: 'center', paddingY: 2 }} >
                <img src="/images/flags/es.png" width="20" alt="es" />
            </MenuItem>
            <MenuItem value="en" sx={{ justifyContent: 'center', alignItems: 'center', paddingY: 2 }} >
                <img src="/images/flags/en.png" width="20" alt="en" />
            </MenuItem>
        </Select>
    )
}

export default LanguageSelector;