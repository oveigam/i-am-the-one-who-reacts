
import { CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from '../components/characters/CharacterCard';
import { fetchAllCharacters } from '../store/slices/characterSlice';

const LandingPage = () => {
    const dispatch = useDispatch()

    const { characters, isLoadingCharacters } = useSelector(state => state.character)

    useEffect(() => {
        dispatch(fetchAllCharacters())
    }, [dispatch])

    return (
        <Grid container spacing={2} >
            {
                isLoadingCharacters ?
                    <Grid item xs={12} sx={{
                        bgcolor: 'rgba(15,23,42, 0.5)',
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}  >
                        <CircularProgress />
                    </Grid>
                    :
                    characters?.map(c => (
                        <Grid key={c.char_id} item xs={12} sm={6} md={4} lg={3} >
                            <CharacterCard
                                id={c.char_id}
                                name={c.name}
                                nickname={c.nickname}
                                img={c.img}
                            />
                        </Grid>
                    ))
            }
        </Grid>
    );
}

export default LandingPage;