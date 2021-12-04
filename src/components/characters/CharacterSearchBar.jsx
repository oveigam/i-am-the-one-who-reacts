
import { Close, Search } from '@mui/icons-material';
import { IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clearCharacterSearch, searchCharacters } from '../../store/slices/characterListSlice';

const CharacterSearchBar = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const search = useSelector(state => state.characterList.search)

    return (
        <Paper sx={{ padding: 1.5 }} >
            <TextField
                fullWidth
                variant="outlined"
                color="primary"
                label={t('search')}
                value={search}
                onChange={e => dispatch(searchCharacters(e.target.value))}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                    endAdornment: search && (
                        <InputAdornment position="end">
                            <IconButton onClick={() => dispatch(clearCharacterSearch())} >
                                <Close />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Paper>
    );
}

export default CharacterSearchBar;