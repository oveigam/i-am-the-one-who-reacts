
import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from '../components/characters/CharacterCard';

const LandingPage = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('characters')
            .then(({ data }) => setCharacters(data))
    }, [])

    return (
        <Grid container spacing={2} >
            {
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