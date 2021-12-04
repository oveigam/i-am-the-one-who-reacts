import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import Quote from "../components/characters/Quote";
import TextWithLabel from "../components/common/TextWithLabel";
import { clearCharacterDetail, fetchCharacterDetail } from "../store/slices/characterSlice";
import Placeholder from './../components/common/Placeholder';

const CharacterPage = () => {
    const { characterId } = useParams()
    const navType = useNavigationType()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { t } = useTranslation()

    const { detail: character, isLoadingDetails } = useSelector(state => state.character)

    useEffect(() => {
        if (characterId) {
            dispatch(fetchCharacterDetail(characterId))
        }
        return () => dispatch(clearCharacterDetail())
    }, [characterId, dispatch])

    return (
        <Paper sx={{ padding: { xs: 1, lg: 4 }, display: 'flex', flex: 1 }} >
            <Stack width="100%"  >

                <Box marginBottom={2} >
                    <Button color="secondary" startIcon={<ArrowBack />} onClick={() => navigate(navType === 'POP' ? '/' : -1)} >
                        {t('backtocharacters')}
                    </Button>
                </Box>

                <Grid container spacing={2} flex={1} >
                    <Grid container item xs={12} lg={5} >
                        <Placeholder isLoading={isLoadingDetails}>
                            <Grid item xs={4} sx={{ display: { lg: 'none' } }} />
                            <Grid item xs={4} lg={12}>

                                <img
                                    style={{ objectFit: 'cover', borderRadius: 4 }}
                                    src={character?.img}
                                    width="100%"
                                    height="100%"
                                    alt="character portrait"
                                />
                            </Grid>
                        </Placeholder>
                    </Grid>

                    <Grid item xs={12} lg={7}>
                        <Placeholder isLoading={isLoadingDetails} >
                            <Stack spacing={2} sx={{ paddingX: 4 }} divider={<Divider />} >

                                <Box>
                                    <Typography
                                        textAlign="center"
                                        variant="h2"
                                        fontSize={{ xs: '2rem', lg: '3.75rem' }}
                                    >
                                        {character?.name}
                                    </Typography>

                                    <Typography
                                        textAlign="end"
                                        fontSize={{ xs: '1rem', lg: '1.3rem' }}
                                        variant="subtitle1"
                                    >
                                        A.K.A. <span style={{ fontStyle: 'italic' }}>{character?.nickname}</span>
                                    </Typography>
                                </Box>

                                <Grid container spacing={2} paddingBottom={2}  >

                                    <Grid item xs={12} lg={6} >
                                        <Stack spacing={2}>

                                            <TextWithLabel label="status" >
                                                {character?.status}
                                            </TextWithLabel>

                                            <TextWithLabel label="birthday" >
                                                {character?.birthday}
                                            </TextWithLabel>

                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={6} >
                                        <Stack spacing={.5}>
                                            <Typography fontWeight="bold" >{t('occupations')}:</Typography>
                                            <ul>
                                                {character?.occupation?.map(o => <li key={o}><Typography color="text.secondary" >{o}</Typography></li>)}
                                            </ul>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} paddingBottom={2}>

                                    <Grid item xs={12}  >
                                        <TextWithLabel label="portrayed" >
                                            {character?.portrayed}
                                        </TextWithLabel>
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Stack spacing={1}>
                                            <Typography fontWeight="bold" >{t('appearance')}:</Typography>
                                            <Grid container spacing={2}>
                                                {
                                                    character?.appearance?.map((season) => (
                                                        <Grid key={season} item >
                                                            <Button disableElevation variant="contained" sx={{ fontWeight: 'bold' }} >{season}</Button>
                                                        </Grid>
                                                    ))
                                                }
                                            </Grid>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Quote characterName={character?.name} />

                            </Stack>
                        </Placeholder>
                    </Grid>

                </Grid>
            </Stack>
        </Paper>
    );
}

export default CharacterPage;