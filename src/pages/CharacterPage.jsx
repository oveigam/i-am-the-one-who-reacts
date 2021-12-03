import { ArrowBack, Refresh } from "@mui/icons-material";
import { Button, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const CharacterPage = () => {
    const { characterId } = useParams()
    const navigate = useNavigate()

    const { t } = useTranslation()

    const [character, setCharacter] = useState({})
    const [quote, setQuote] = useState('')

    useEffect(() => {
        if (characterId) {
            axios.get(`/characters/${characterId}`)
                .then(({ data }) => setCharacter(data[0]))
        }
    }, [characterId])

    useEffect(() => {
        if (character.name) {
            axios.get('quote/random', { params: { author: character.name } })
                .then(({ data }) => {
                    if (data.length > 0) {
                        setQuote(data[0].quote)
                    }
                })
        }
    }, [character])

    return (
        <Paper sx={{ padding: { xs: 1, lg: 4 }, width: '100%' }}>
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Button color="secondary" startIcon={<ArrowBack />} onClick={() => navigate('/')} >{t('backtocharacters')}</Button>
                </Grid>
                <Grid item xs={4} sx={{ display: { lg: 'none' } }} />
                <Grid item xs={4} display="flex" justifyContent="center" >
                    <img
                        style={{ objectFit: 'cover', borderRadius: 4 }}
                        src={character.img}
                        width="100%"
                        alt="character image"
                    />
                </Grid>

                <Grid item container xs={12} lg={8} >
                    <Stack width="100%" spacing={2} sx={{ paddingX: 4 }} >

                        <Typography textAlign="center" variant="h2" fontSize={{ xs: '2rem', lg: '3.75rem' }} >{character.name}</Typography>

                        <Typography textAlign="end" fontSize={{ xs: '1rem', lg: '1.3rem' }} variant="subtitle1">
                            A.K.A. <span style={{ fontStyle: 'italic' }}>{character.nickname}</span>
                        </Typography>

                        <Divider />

                        <Grid container >
                            <Grid item xs={12} lg={6} >
                                <Stack spacing={2}>

                                    <Stack direction="row" spacing={1}>
                                        <Typography fontWeight="bold" >{t('status')}:</Typography>
                                        <Typography color="text.secondary" >{character.status}</Typography>
                                    </Stack>

                                    <Stack direction="row" spacing={1}>
                                        <Typography fontWeight="bold" >{t('birthday')}:</Typography>
                                        <Typography color="text.secondary"  >{character.birthday}</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Stack spacing={.5}>
                                    <Typography fontWeight="bold" >{t('occupations')}:</Typography>
                                    <ul >
                                        {character.occupation?.map(o => <li key={o}><Typography color="text.secondary" >{o}</Typography></li>)}
                                    </ul>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Divider />

                        <Stack direction="row" spacing={1}>
                            <Typography fontWeight="bold" >{t('portrayed')}:</Typography>
                            <Typography color="text.secondary"  >{character.portrayed}</Typography>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography fontWeight="bold" >{t('appearance')}:</Typography>
                            <Grid container spacing={2}>
                                {character.appearance?.map((season) => (
                                    <Grid key={season} item >
                                        <Button disableElevation variant="contained" sx={{ fontWeight: 'bold' }} >{season}</Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>

                        {
                            quote &&
                            <>
                                <Divider />
                                <Stack>
                                    <Stack alignItems="flex-end">
                                        <IconButton onClick={() => {
                                            axios.get('quote/random', { params: { author: character.name } })
                                                .then(({ data }) => {
                                                    if (data.length > 0) {
                                                        setQuote(data[0].quote)
                                                    }
                                                })
                                        }} >
                                            <Refresh fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                    <Stack sx={{ height: 130 }} >
                                        <Typography
                                            padding={1}
                                            fontFamily="serif"
                                            fontStyle="italic"
                                            color="text.secondary"
                                            textAlign="center"
                                            variant="h5"
                                            fontSize={{ xs: '1rem', lg: '1.5rem' }}
                                        >
                                            “{quote}”
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </>
                        }

                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CharacterPage;