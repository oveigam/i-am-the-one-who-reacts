
import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterList from '../components/characters/CharacterList';
import CharacterSearchBar from '../components/characters/CharacterSearchBar';
import LoadingPanel from '../components/common/LoadingPanel';
import { fetchAllCharacters } from '../store/slices/characterListSlice';

const LandingPage = () => {
    const dispatch = useDispatch()

    const { filteredCharacters: characters, isLoadingCharacters } = useSelector(state => state.characterList)

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [dispatch])

    return (
        <Stack flex={1} >

            <Box paddingY={2}>
                <img
                    src="/images/title.png"
                    width="100%"
                    draggable={false}
                />
            </Box>

            <Box marginBottom={2} width={{ xs: '100%', md: '80%', lg: '60%' }} >
                <CharacterSearchBar />
            </Box>
            {
                (isLoadingCharacters && characters?.length === 0) ?
                    <LoadingPanel />
                    :
                    <CharacterList />
            }
        </Stack>
    )
}

export default LandingPage;